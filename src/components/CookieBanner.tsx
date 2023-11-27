import { useState } from "react"

export default function CookieBanner() {
    const [isConsented, setIsConsented] = useState(localStorage.getItem('consentCookies') === 'true')

    const consentCookies = () => {
        localStorage.setItem('consentCookies', 'true')
        setIsConsented(true)
    }
    return (
        <>
            {!isConsented &&
                <div className="flex w-full rounded-tl-lg rounded-tr-lg bg-black text-white gap-2 bottom-0 fixed justify-center items-center p-2">
                    <p className="text-center">
                        Nosso site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com o uso de cookies
                    </p>
                    <button onClick={consentCookies} className="bg-blue-600 p-1">Concordar</button>
                </div>
            }
        </>
    )
}