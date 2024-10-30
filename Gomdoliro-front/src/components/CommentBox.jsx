import {React, useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/commentBox.css'
import Comment from '../components/Comment'
import CommentButton from '../components/CommentButton'

const CommentBox = ({boardId}) => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [comments, setComments] = useState([])
    const [input, setInput] = useState('')
    let canWrite = 0
    let bgColor = '#B3B3B3'
    
    useEffect(() => {
        const getAll = async () => {
            try {
                const response = await axios.get(`${server}/board/${boardId}/comments/all`)
                setComments(response.data)
            } catch(error) {
                console.error('Error : ', error);
            }
        }

        getAll()
    }, [])

    if(input.length > 0) {
        canWrite = 1
        bgColor = '#1F8BFF'
    }
    else {
        canWrite = 0
        bgColor = '#B3B3B3'
    }

    return (
        <div className="comment">
            <div className="comment_box">
                <textarea 
                    placeholder="댓글 작성"
                    value={input}
                    onChange={(e) => {
                        setInput(e.target.value)
                    }}
                />
            </div>
            <span className="buttonBox">
                <CommentButton 
                    text={"취소"} 
                    backColor={"#fff"}
                    onClick={() => {
                        setInput('')
                    }}
                />
                <CommentButton 
                    text={"작성"} 
                    backColor={bgColor}
                    
                />
            </span>
            <div className="userComment">
                {comments.length === 0 && <h2>아직 댓글이 없습니다</h2>}
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        writer={comment.commentWriter} 
                        content={comment.commentContent}
                        date={comment.commentDate}
                    />
                ))}
            </div>
        </div>
    )
}

export default CommentBox