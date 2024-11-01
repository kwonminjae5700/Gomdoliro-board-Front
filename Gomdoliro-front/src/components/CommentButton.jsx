import React from 'react'
import '../styles/commentButton.css'

const CommentButton = ({text, backColor, onClick}) => {
    let buttonStyle = {
        backgroundColor : backColor,
        color : text === '취소' || text === '삭제' ? "#000" : "#fff",
        ...(text === '삭제' && {
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