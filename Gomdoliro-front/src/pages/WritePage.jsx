import {React, useState} from 'react'
import Write from '../components/Write'
import Write_underbar from '../components/Write_underbar'

const WritePage = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleInputChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = () => {
        if(title.length === 0) alert("제목을 입력해주세요.")
        else if(content.length === 0) alert("내용을 입력해주세요.")
        else {
            
        }
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