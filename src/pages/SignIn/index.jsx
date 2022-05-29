import React, { useState } from 'react'
import Input from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import { SForm } from '../SignUp'
import { toast } from 'react-toastify'
const SignIn = () => {
    const [user, setUser] = useState({
        name: "",
        password: "",
    })
    const navigate = useNavigate();
    const { name, password } = user;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !name) {
            toast.error('Fill all the fields!');
            return;
        }
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

        const findUser = users.find(u => u.name === user.name && u.password === user.password);
        if (!findUser) {
            toast.error('Credential not correct!');
            return;
        }
        toast.success('Log in successful');
        localStorage.setItem('currentUser', JSON.stringify(user));
        navigate('../user', { replace: true });
    }
    return (
        <SForm onSubmit={handleSubmit}>
            <h1 className="text">Sign in</h1>
            <Input label="Username" value={name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <Input label="Password" value={password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <Link to="/sign-in">Don't have an account? Sign up</Link>
            <div className="button-group">
                <Button text="Login" />
            </div>
        </SForm>
    )
}

export default SignIn

