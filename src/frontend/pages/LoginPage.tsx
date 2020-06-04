import React, {useState} from 'react';

const LoginPage: React.FC = ()=> {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value})
    }

    return (
        <form>
            <h1>Login!</h1>
            <label htmlFor="email">Email</label>
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </form>
    )
}

export default LoginPage;