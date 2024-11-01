import React from 'react'
import '../styles/commentButton.css'

const CommentButton = ({text, backColor, onClick}) => {
    let buttonStyle = {
        backgroundColor : backColor,
        ...(backColor === '#fff' && {
            color : "#000"
        })
    }

    buttonStyle = {
        backgroundColor : backColor,
        ...(text === '삭제' && {
            color : "#000",
            width : "5vw",
            height : "5vh",
            position : "absolute",
            right : "-6.4vw"
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