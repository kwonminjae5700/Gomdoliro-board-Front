import React from 'react'
import '../styles/write.css'

const Write = () => {
    return (
        <main>
            <div className="input_box">
                <label htmlFor="text"/>
                <input type="text" placeholder="제목을 입력하세요"/>
            </div>
            <textarea name="content" placeholder="내용을 입력하세요"/>
        </main>
    )
}

export default Write