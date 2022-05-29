import React, { useState } from 'react'
import Input from '../../components/Input'
import styled from 'styled-components'
import Button from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialValue = {
    name: '',
    password: '',
    confirmation: '',
}

const SignUp = () => {
    const [user, setUser] = useState(initialValue);
    const { name, password, confirmation } = user;
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        if (!name || !password || !confirmation) {
            toast.error('Fill all the fields!');
            return;
        }
        if (password !== confirmation) {
            toast.error('Re check password!');
            return;
        }
        const users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        const id = new Date();
        const newUser = {
            name,
            password,
            id
        }
        localStorage.setItem('users', JSON.stringify([...users, newUser]));
        toast.success('Register successful');
        navigate('../sign-in', { replace: true });
    }


    return (
        <SForm onSubmit={handleRegister}>
            <h1 className="text">Register</h1>
            <Input label="Username" value={name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <Input label="Password" value={password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <Input label="Re-enter password" value={confirmation} onChange={(e) => setUser({ ...user, confirmation: e.target.value })} />
            <Link to="/sign-in">Already have an account? Sign in</Link>
            <div className="button-group">
                <Button text="Submit" />
            </div>
        </SForm>
    )
}

export default SignUp
export const SForm = styled.form`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
    .text{
        text-align: center;
        color: green;
    }
    .button-group{
        display: flex;
        justify-content: center;
        margin-top: 10px;
    }
`;