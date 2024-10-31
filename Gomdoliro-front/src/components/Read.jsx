import {React, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Read_button from '../components/Read_button'
import Modal from '../components/Modal'
import Read_details from '../components/Read_details'
import CommentBox from './CommentBox'
import '../styles/read.css'

const Read = ({userLogin}) => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [post, setPost] = useState(null)
    const [count, setCount] = useState(0)
    const [del_post, setDel_post] = useState(false)
    const {id} = useParams()
    const nav = useNavigate()

    useEffect(() => {
        const getId = async () => {
            try {
                const response = await axios.get(`${server}/board/${id}`)
                setPost(response.data)
            } catch(error) {
                console.error("Error : ", error)
            }
        }

        getId()
    }, [])

    if (!post) {
        return <div></div>;
    }

    const delete_post = async () => {
        try {
            await axios.delete(`${server}/board/${id}`)
        } catch (error) {
            console.error('Error : ', error)
        }
    }

    return (
        <main>
            {del_post && (
                <Modal 
                    onClose={() => setDel_post(false)}
                    delIsFinish={() => {
                        delete_post()
                        setDel_post(false)
                        setTimeout(() => nav("/main"), 200)
                    }} 
                />
            )}

            <div className="read_head">
                <h1>{post.title}</h1>
                <span>
                    <Read_button color={"#999999"} text={"수정"} button_work={() => nav(`/update/${post.id}`)}/>
                    <Read_button color={"#FF1F1F"} text={"삭제"} button_work={() => setDel_post(true)}/>
                </span>
            </div>
            <div className="read_section">
                <p>{post.content}</p>
            </div>
            <Read_details writer={post.writer} count={count}/>
            <CommentBox boardId={id} userLogin={userLogin} setCount={setCount}/>
        </main>
    )
}

export default Read