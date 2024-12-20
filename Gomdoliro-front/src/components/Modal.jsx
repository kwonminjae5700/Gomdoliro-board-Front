import React from 'react'
import Read_button from '../components/Read_button'
import '../styles/modal.css'

const Modal = ({text, onClose, delIsFinish}) => {
    return (
        <div className="ReadBackground">
            <div className="modal_box">
                <h2>이 {text}을 삭제하시겠습니까?</h2>
                <div>
                    <Read_button color={"#999999"} text={"취소"} button_work={onClose}/>
                    <Read_button color={"#FF1F1F"} text={"삭제"} button_work={delIsFinish}/>
                </div>
            </div>
        </div>
    )
}

export default Modal