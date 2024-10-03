import React from 'react'
import '../styles/write.css'

const Update = ({title, changeTitle, content, changeContent}) => {

    return (
        <main>
            <div className="input_box">
                <label htmlFor="text"/>
                <input 
                    type="text"
                    value={title}
                    onChange={changeTitle}
                />
            </div>
            <textarea 
                name="content"
                value={content}
                onChange={changeContent}
            />
            
        </main>
    )
}


export default Update