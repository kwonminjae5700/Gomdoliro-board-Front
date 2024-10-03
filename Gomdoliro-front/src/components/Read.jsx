import {React, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Read_button from '../components/Read_button'
import Modal from '../components/Modal'
import '../styles/read.css'

const Read = () => {
    const [post, setPost] = useState(null)
    const [del_post, setDel_post] = useState(false)
    const {id} = useParams()
    const nav = useNavigate()

    useEffect(() => {
        const getId = async () => {
            try {
                const response = await axios.get(`https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/board/${id}`)
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
            const response = await axios.delete(`https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/board/${id}`)
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
        </main>
    )
}

export default Read