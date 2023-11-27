import { ChangeEvent } from "react"

export interface InputProps {
    label: string
    type?: string
    placeholder?: string
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ label, type = 'text', placeholder, value, onChange }: InputProps) {
    return (
        <div className="pt-1 pb-1">
            <label className="font-bold">{label}</label>
            <input className="flex rounded-md w-full p-1" type={type} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    )
}