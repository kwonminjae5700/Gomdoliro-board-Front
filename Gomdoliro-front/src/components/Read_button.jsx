import React from 'react'
import '../styles/button.css'

const Read_button = ({color, text, toUpdate}) => {

    const buttonStyle = {
        backgroundColor : color
    }
    return (
        <button 
            className="read_button" 
            style={buttonStyle} 
            onClick={toUpdate}>
        {text}</button>
    )
}

export default Read_button