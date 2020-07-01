import React, {useState} from 'react';
import authAdapter from '../adapters/auth-adapter'
import { Redirect } from 'react-router-dom'

const LoginPage: React.FC = ()=> {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await authAdapter.login(formData)
        console.log('res:', res)
        if (!res.err) setIsLoginSuccess(true);
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value})
    }

    if (isLoginSuccess) return <Redirect to='/' />

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login!</h1>
            <label htmlFor="email">Email</label>
            <input
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                name="password"
                type="passowrd"
                value={formData.password}
                onChange={handleChange}
            />
            <button>Login</button>
        </form>
    )
}

export default LoginPage;