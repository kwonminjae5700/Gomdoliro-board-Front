import React from 'react'
import Button from '../components/Button'
import '../styles/write.css'

const Write_underbar = ({onSubmit}) => {
    return (
        <div className="underbar">
            <div className="buttons">
                <Button text={"임시 저장"} buttonColor={"#FFFFFF"} onSubmit={onSubmit}/>
                <Button text={"저장 완료"} buttonColor={"#1F8BFF"} onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Write_underbar