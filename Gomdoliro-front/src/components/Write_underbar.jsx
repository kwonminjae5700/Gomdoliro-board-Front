import React from 'react'
import Button from '../components/Button'
import '../styles/write.css'

const Write_underbar = () => {
    return (
        <div className="underbar">
            <div className="buttons">
                <Button text={"임시 저장"} buttonColor={"#FFFFFF"}/>
                <Button text={"저장 완료"} buttonColor={"#1F8BFF"}/>
            </div>
        </div>
    )
}

export default Write_underbar