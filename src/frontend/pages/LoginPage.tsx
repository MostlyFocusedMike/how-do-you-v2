import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import authAdapter from '../adapters/auth-adapter';
import AppContext from '../context';

const LoginPage: React.FC = () => {
    const { currentUserId, setCurrentUserId } = useContext(AppContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await authAdapter.login(formData);
        console.log('res:', res);
        if (!res.err) setCurrentUserId(res.id);
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    };

    if (currentUserId) return <Redirect to='/' />;

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
    );
};

export default LoginPage;
