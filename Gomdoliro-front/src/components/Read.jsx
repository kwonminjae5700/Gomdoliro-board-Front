import {React, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import '../styles/read.css'

const Read = () => {
    const [post, setPost] = useState(null)
    const {id} = useParams()

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

    return (
        <main>
            <div className="read_head">
                <h1>{post.title}</h1>
            </div>
            <div className="read_section">
                <p>{post.content}</p>
            </div>
        </main>
    )
}

export default Read