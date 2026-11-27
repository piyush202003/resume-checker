import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"
import { AuthShell } from "../components/auth/AuthShell"

export function Login(){

    const { login } = useAuth()
    const nav = useNavigate()
    const [ form, setForm ] = useState({ email: '', password: '' })
    const [ err, setErr ] = useState('')
    const [ loading, setLoading ] = useState(false)

    async function onSubmit(e) {
        e.preventDefault()
        setErr('')
        setLoading(true)
        try {
            await login(form)
            nav('/dashboard')
        } catch (e) {
            setErr(e.message || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthShell
            headline={
                <>
                    Sharpen your resume,
                    <br /> 
                    <em className="italic">with intelligence.</em>
                </>
            }
            subhead={"Score against ATS, fix weak bullets, and ship a stronger version of yourself in minutes."}
        >

        </AuthShell>
    )
}