import React from 'react';
import styled from 'styled-components'

const Input = ({ label, value, onChange }) => {

    return (
        <SInput>
            <label>{label}</label>
            <input type="text" value={value} onChange={onChange} />
        </SInput>
    )
}

export default Input

const SInput = styled.div`
    margin: 5px 0;
    label {
        color: gray;
    }
    input{ 
        border: none;
        background-color: #81d3ec;
        color: gray;
        outline: none;
        padding: 15px;
        border-radius: 5px;
        width: 100%;
        margin: 5px;
    }
`;