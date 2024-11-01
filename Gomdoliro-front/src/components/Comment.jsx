import {React, useState} from 'react';
import '../styles/comment.css';
import user_icon from '../assets/user_icon.png';
import seroJum from '../assets/seroJum.png';
import CommentButton from '../components/CommentButton'

const Comment = ({writer, content, date}) => {
    const [buttonDel, setButtonDel] = useState(false)

    return (
        <div className="commentBox">
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
                    <CommentButton text={"삭제"} backColor={"#B3B3B3"}/>
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
