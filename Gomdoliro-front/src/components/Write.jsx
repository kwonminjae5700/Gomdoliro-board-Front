import {React, useState} from 'react'
import '../styles/write.css'

const Write = ({inputValue, inputChange, textAreaValue, textAreaChange}) => {

    return (
        <main>
            <div className="input_box">
                <label htmlFor="text"/>
                <input 
                    type="text" 
                    placeholder="제목을 입력하세요"
                    value={inputValue}
                    onChange={inputChange}
                />
            </div>
            <textarea 
                name="content" 
                placeholder="내용을 입력하세요"
                value={textAreaValue}
                onChange={textAreaChange}
            />
            
        </main>
    )
}

export default Write