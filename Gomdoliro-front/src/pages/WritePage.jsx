import {React, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Write from '../components/Write'
import Write_underbar from '../components/Write_underbar'

const WritePage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const nav = useNavigate()

    const post = async () => {
        try {
            const response = await axios.post('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/board' , {
                title,
                content
            })
            console.log('request success')
            alert("작성에 성공하셨습니다!")
            setTitle('')
            setContent('')
            nav("/")
        } catch (error) {
            console.error('Error : ', error)
        }
    }

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
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
                inputChange={handleInputChange}
                textAreaValue={content}
                textAreaChange={handleContentChange}    
            />
            <Write_underbar onSubmit={handleSubmit}/>
        </>
    )
}

export default WritePage