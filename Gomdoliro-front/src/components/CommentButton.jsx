import React from 'react'
import '../styles/commentButton.css'

const CommentButton = ({text, backColor, onClick}) => {
    let buttonStyle = {
        backgroundColor : backColor,
        ...(backColor === '#fff' && {
            color : "#000"
        })
    }

    return (
        <button 
            style={buttonStyle}
            onClick={onClick}
        >{text}
        </button>
    )
}

export default CommentButton