import {React, useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Update from '../components/Update'
import Write_underbar from '../components/Write_underbar'

const UpdatePage = () => {
    const nav = useNavigate()
    const [title, setUpdate_title] = useState('')
    const [content, setUpdate_content] = useState('')
    const {id} = useParams()

    useEffect(() => {
        const updateId = async () => {
            try {
                const response = await axios.get(`https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/board/${id}`)
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
            const request = await axios.put('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/board', {
                id,
                title,
                content
            })
            console.log('request success')
            alert("수정에 성공하셨습니다!")
            setUpdate_title('')
            setUpdate_content('')
            nav("/")
        } catch(error) {
            console.error('Error : ', error)
        }
    }

    const UpdateTitleChange = (e) => {
        setUpdate_title(e.target.value)
    }

    const UpdateContentChange = (e) => {
        setUpdate_content(e.target.value)
    }

    const UpdateSubmit = () => {
        if(title.length === 0) alert("제목을 입력하세요")
        else if(content.length === 0) alert("내용을 입력하세요")
        else update()
    }

    return (
        <>
            <Update 
                title={title}
                changeTitle={UpdateTitleChange}
                content={content}
                changeContent={UpdateContentChange}
            />
            <Write_underbar onSubmit={UpdateSubmit}/>
        </>
    )
}

export default UpdatePage