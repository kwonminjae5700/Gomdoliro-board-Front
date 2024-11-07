import {React, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Write from '../components/Write'
import Write_underbar from '../components/Write_underbar'

const WritePage = () => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [writer, setWriter] = useState(localStorage.getItem('nickname'))
    const nav = useNavigate()

    const post = async () => {
        try {
            const response = await axios.post(`${server}/board` , {
                title,
                content,
                writer
            })
            console.log('request success')
            alert("작성에 성공하셨습니다!")
            setTitle('')
            setContent('')
            nav("/main")
        } catch (error) {
            console.error('Error : ', error)
        }
    }

    const handleSubmit = () => {
        if(title.length === 0) alert("제목을 입력해주세요.")
        else if(content.length === 0) alert("내용을 입력해주세요.")
        else post()
    }

    return (
        <>
            <Write 
                inputValue={title} 
                inputChange={(e) => setTitle(e.target.value)}
                textAreaValue={content}
                textAreaChange={(e) => setContent(e.target.value)}    
            />
            <Write_underbar onSubmit={handleSubmit}/>
        </>
    )
}

export default WritePage