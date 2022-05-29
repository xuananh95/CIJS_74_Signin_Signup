import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Header = () => {
    let activeStyle = {
        color: "red"
    }
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const current = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
        setCurrentUser(current);

    }, [location])
    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('../sign-in', { replace: true });
        toast.success('Log out successful');
    }
    return (
        <SHeader>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined} to="/" className="logo"><h1>Movie</h1></NavLink>
            {currentUser ? (
                <>
                    <div className="options">
                        <ul>
                            <li>
                                <NavLink style={({ isActive }) =>
                                    isActive ? activeStyle : undefined} to="/user">
                                    User
                                </NavLink>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>

                            </li>
                        </ul>
                    </div>
                </>
            ) :
                <div className="options">
                    <ul>
                        <li>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined} to="/sign-up">Sign up</NavLink>
                            <NavLink style={({ isActive }) =>
                                isActive ? activeStyle : undefined} to="/sign-in">Sign in</NavLink>
                        </li>
                    </ul>
                </div>
            }
        </SHeader>
    )
}

export default Header

const SHeader = styled.div`
    background-color: blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    .logo{
        color: white;
        cursor: pointer;
        text-decoration: none;
    }
    .options {
        ul {
            display: flex;
            align-items: center;
            li {
                list-style: none;
                a {
                    text-decoration: none;
                    color: white;
                    margin-right: 10px;
                }
            }
        }
    }
`;
