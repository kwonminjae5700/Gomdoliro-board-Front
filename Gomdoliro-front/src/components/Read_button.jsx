import React from 'react'
import '../styles/button.css'

const Read_button = ({color, text}) => {

    const buttonStyle = {
        backgroundColor : color
    }
    return (
        <button className="read_button" style={buttonStyle}>{text}</button>
    )
}

export default Read_button