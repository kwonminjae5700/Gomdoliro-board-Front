import {React, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Update from '../components/Update'
import Write_underbar from '../components/Write_underbar'

const UpdatePage = () => {
    const server = process.env.VITE_SERVER_ADDRESS
    const nav = useNavigate()
    const [title, setUpdate_title] = useState('')
    const [content, setUpdate_content] = useState('')
    const {id} = useParams()

    useEffect(() => {
        const updateId = async () => {
            try {
                const response = await axios.get(`${server}/board/${id}`)
                setUpdate_title(response.data.title)
                setUpdate_content(response.data.content)
            } catch(error) {    
                console.error('Error : ', error)
            }
        }

        updateId()
    }, [id])

    const update = async () => {
        try {
            const response = await axios.put(`${server}/board`, {
                id,
                title,
                content
            })
            console.log('request success')
            alert("수정에 성공하셨습니다!")
            setUpdate_title('')
            setUpdate_content('')
            nav("/main")
        } catch(error) {
            console.error('Error : ', error)
        }
    }

    return (
        <>
            <Update 
                title={title}
                changeTitle={(e) => setUpdate_title(e.target.value)}
                content={content}
                changeContent={(e) => setUpdate_content(e.target.value)}
            />
            <Write_underbar onSubmit={() => {
                if(title.length === 0) alert("제목을 입력하세요")
                else if(content.length === 0) alert("내용을 입력하세요")
                else update()
            }}/>
        </>
    )
}

export default UpdatePage