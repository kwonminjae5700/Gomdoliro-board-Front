import {React, useState, useEffect} from 'react'
import axios from 'axios'
import '../styles/commentBox.css'
import Comment from '../components/Comment'

const CommentBox = ({boardId}) => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [comments, setComments] = useState([])
    
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

    console.log(comments)

    return (
        <div className="comment">
            <div className="comment_box">
                <textarea placeholder="댓글 작성" />
            </div>
            <span className="buttonBox">
                <button>취소</button>
                <button>작성</button>
            </span>
            <div className="userComment">
                {comments.length === 0 && <h2>아직 댓글이 없습니다</h2>}
                {comments.map((comment) => (
                    <Comment writer={comment.commentWriter} content={comment.commentContent}/>
                ))}
            </div>
        </div>
    )
}

export default CommentBox