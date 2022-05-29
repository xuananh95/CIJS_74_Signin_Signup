import React from 'react'
import styled from 'styled-components'

const Button = ({ text }) => {
    return (
        <SButton>
            {text}
        </SButton>
    )
}

export default Button

const SButton = styled.button`
    width: 80px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: white;
    border: none;
    background-color: bisque;
    border-radius: 5px;
`;