import {React, useState} from 'react'
import '../styles/replyComment.css'
import user_icon from '../assets/user_icon.png';
import seroJum from '../assets/seroJum.png';
import Modal from '../components/Modal';
import CommentButton from '../components/CommentButton'

const ReplyComment = ({writer, content, date}) => {
    const [buttonDel, setButtonDel] = useState(false)
    const [modalOpen, setModal] = useState(false)

    return (
        <div className="replyBox">
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
        </div>
    )
}

export default ReplyComment