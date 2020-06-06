import React, {useState} from 'react';
import authAdapter from '../adapters/auth-adapter'

const LoginPage: React.FC = ()=> {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        authAdapter.login(formData).then(console.log)
    }

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value})
    }

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