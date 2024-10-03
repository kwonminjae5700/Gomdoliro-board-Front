import React from 'react'
import '../styles/comment.css'

const Comment = () => {


    return (
        <div className="comment">
            <div className="comment_box">
                <textarea placeholder="댓글 작성" />
            </div>
            <button>작성하기</button>
            <div className="userComment">
                <h2>아직 댓글이 없습니다.</h2>
            </div>
        </div>
    )
}

export default Comment