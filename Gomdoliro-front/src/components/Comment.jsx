import {React, useState, useEffect} from 'react';
import axios from 'axios'
import '../styles/comment.css';
import user_icon from '../assets/user_icon.png';
import plus from '../assets/plus.svg'
import arrow from '../assets/arrow.svg'
import seroJum from '../assets/seroJum.png';
import CommentButton from '../components/CommentButton'
import Modal from '../components/Modal'
import ReplyComment from '../components/ReplyComment'

const Comment = ({commentId, writer, content, date, boardId, setComDel}) => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [addReply, setAddReply] = useState(false)
    const [buttonDel, setButtonDel] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [commentOpen, setOpen] = useState(false)
    const [reCommentContent, setReplyContent] = useState('')
    const [reCommentWriter, setReWriter] = useState(localStorage.getItem('nickname'))
    const [reComment, setReComment] = useState([])
    const [reDel, setReDel] = useState(false)

    let arrow_style = {
        ...(commentOpen && {
            transform : 'scaleY(-1)'
        })
    }

    const commentDel = async () => {
        console.log(commentId)
        try {
            await axios.delete(`${server}/board/${boardId}/comments/${commentId}`)
        } catch(error) {
            console.log("Error : ", error)
        }

        setComDel(commentId)
    }

    const getReply = async () => {
        try {
            const response = await axios.get(`${server}/board/${boardId}/comments/${commentId}/recomment/read`)
            setReComment(response.data)
        } catch(error) {
            console.log("Error : ", error)
        }
    }

    const postReply = async () => {
        try {
            await axios.post(`${server}/board/${boardId}/comments/${commentId}/recomment`, {
                reCommentContent,
                reCommentWriter
            })
            getReply()
        } catch(error) {
            console.log("Error : ", error)
        }

        setReplyContent('')
        setAddReply(false)
    }

    if(reDel) {
        getReply()
        if(reComment.length-1 <= 0) setOpen(false)
        
        setReDel(false)
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
                    onClick={() => setButtonDel(!buttonDel)}
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
            {!addReply ? 
            <div className="funcComment">
                <div className="addComment" onClick={() => setAddReply(true)}>
                    <img src={plus} alt="plus"/>
                    <span>답글 달기</span>
                </div>
                <div className="seeComment" onClick={() => {
                    if(!commentOpen) {
                        setOpen(true)
                        getReply()
                    } else {
                        setOpen(false)
                    }
                }}>
                    <img src={arrow} alt="arrow" style={arrow_style}/>
                    <span>답글 열기</span>
                </div>
            </div>
            :
            <div className="addReply">
                <input 
                    type="text" 
                    className="replyInput" 
                    value={reCommentContent} 
                    onChange={(e) => setReplyContent(e.target.value)}
                />

                <CommentButton 
                    text={"취소"} 
                    backColor={"#fff"} 
                    onClick={() => {
                        setAddReply(false)
                        setReplyContent(null)
                    }}
                />
                <CommentButton 
                    text={"작성"}
                    backColor={"#1F8BFF"}
                    onClick={() => {
                        if(reCommentContent.length > 0) postReply()
                    }}
                />
            </div>
            }

            {commentOpen && reComment.map((item) => (
                <ReplyComment
                    key={item.id}
                    boardId={boardId}
                    commentId={item.id}
                    recommentsId={item.id}
                    writer={item.reCommentWriter}
                    content={item.reCommentContent}
                    date={item.reCommentDate}
                    setReDel={setReDel}
                />
            ))}
        </div>
    );
};

export default Comment;
