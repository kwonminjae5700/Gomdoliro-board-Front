import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/button.css'

const Button = ({ text, buttonColor, onSubmit}) => {
    const nav = useNavigate()

    const buttonStyle = {
        backgroundColor : buttonColor,
        ...(buttonColor === '#FFFFFF' && {
            border : "1px solid #000",
            color : "#000"
        })
    }

    const buttonOnClick = () => {
        if(onSubmit) {
            onSubmit()
        } else {
            nav("/write")
        }
    }

    return (
        <button className="write_button" onClick={buttonOnClick} style={buttonStyle}>{text}</button>
    )
}

export default Button