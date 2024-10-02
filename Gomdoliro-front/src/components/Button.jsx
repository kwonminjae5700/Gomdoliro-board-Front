import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/button.css'

const Button = ({ text, buttonColor }) => {
    const nav = useNavigate()

    const buttonStyle = {
        backgroundColor : buttonColor,
        ...(buttonColor === '#FFFFFF' && {
            border : "1px solid #000",
            color : "#000"
        })
    }

    return (
        <button className="write_button" onClick={()=>{nav("/write")}} style={buttonStyle}>{text}</button>
    )
}

export default Button