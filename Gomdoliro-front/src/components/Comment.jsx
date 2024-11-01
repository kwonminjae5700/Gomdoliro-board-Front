import {React, useState} from 'react';
import axios from 'axios'
import '../styles/comment.css';
import user_icon from '../assets/user_icon.png';
import seroJum from '../assets/seroJum.png';
import CommentButton from '../components/CommentButton'
import Modal from '../components/Modal'

const Comment = ({commentId, writer, content, date, boardId, setComDel}) => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [buttonDel, setButtonDel] = useState(false)
    const [modalOpen, setModal] = useState(false)

    const commentDel = async () => {
        try {
            await axios.delete(`${server}/board/${boardId}/comments/${commentId}`)
        } catch(error) {
            console.log("Error : ", error)
        }

        setComDel(commentId)
    }

    return (
        <div className="commentBox">
            {modalOpen && 
                <Modal 
                    text={"댓글"}
                    onClose={() => setModal(false)}
                    delIsFinish={() => commentDel()}
                />}
            <span className="commentRow">
                <img src={user_icon} alt="icon" className="userIcon" />
                <span className="commentSpan">
                    <h3>{writer}</h3>
                    <h4>{date}</h4>
                </span>
                <img 
                    src={seroJum} 
                    alt="seroJum" 
                    className="seroJum"
                    onClick={() => setButtonDel(true)}
                />
                {buttonDel && 
                    <CommentButton 
                        text={"삭제"} 
                        backColor={"#B3B3B3"} 
                        onClick={() => setModal(true)}
                    />
                }
                
            </span>
            <div className="commentContent">
                {content}
            </div>
            <div className="addComment">
                + 답글 달기
            </div>
        </div>
    );
};

export default Comment;
