import React from 'react'
import '../styles/button.css'

const Read_button = ({color, text, button_work}) => {

    const buttonStyle = {
        backgroundColor : color
    }
    return (
        <button 
            className="read_button" 
            style={buttonStyle} 
            onClick={button_work}>
        {text}</button>
    )
}

export default Read_button