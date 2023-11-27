import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import Input from "./Input"

export default function LeadForm() {
    const SERVICE_ID = ''
    const TEMPLATE_ID = ''
    const PUBLIC_KEY = ''

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef<HTMLFormElement>(null)

    const sendEmail = (e: any) => {
        e.preventDefault()

        const allMessage = `
            Nome: ${name} \n
            E-mail: ${email} \n
            Mensagem: ${message}
        `

        emailjs.init(PUBLIC_KEY)
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            to_name: 'Administrador',
            from_name: name.split(' ')[0],
            message: allMessage,
            reply_to: email
        })
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
            .finally(() => {
                setName('')
                setEmail('')
                setMessage('')
            })            
    }

    return (
        <form ref={form} onSubmit={sendEmail} className="flex-col gap-2 p-2 bg-gray-300 rounded-sm">
            <p className="text-3xl font-bold text-center">Formulário EmailJs</p>
            <Input label="Nome" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} />
            <Input label="Email" type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Mensagem" placeholder="Digite sua mensagem aqui" value={message} onChange={(e) => setMessage(e.target.value)} />
            <div className="pt-1 pb-1 flex justify-center items-center font-bold text-white bg-blue-600">
                <input type="submit" value="Enviar" />
            </div>
        </form>
    )
}