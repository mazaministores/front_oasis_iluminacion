import React, { useState } from 'react'
import { useLocation } from 'wouter'
import loginServices from '../services/login'
import Spinner from './Loading'

export default function LoginPage() {

    const [values, setValues] = useState({ username: '', password: '' })
    const [loading, setLoading] = useState(false)
    const [, navigate] = useLocation()

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const user = await loginServices.login(values)
            window.localStorage.setItem('logged', JSON.stringify(user))
            setLoading(false)
            navigate('/master')
        }
        catch (err) {
            setLoading(false)
            console.log(err)
        }
    }

    return (

        <form onSubmit={onSubmit} className="form-login">
            <label className="label">Usuario</label>
            <input name="username" className="input m-b-2" onChange={handleInputChange} required />
            <label className="label">Contraseña</label>
            <input name="password" type="password" className="input m-b-2" onChange={handleInputChange} required />
            {loading ? <div><Spinner /></div> : <button className="btn" >SIGUIENTE</button>}

        </form>
    )
}