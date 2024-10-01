import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/main.css'

const Main = () => {
    const nav = useNavigate()

    return (
        <main>
            <div className="write_filter">
                <span>
                    <div>작성일</div>
                    <div>인기글</div>
                </span>
                <button className="write_button" onClick={()=>{nav("/write")}}>새 글 작성</button>
            </div>
            <section>
                <div className="section_title">
                    <div className="no">no</div>
                    <div className="title">제목</div>
                    <div className="writer">작성자</div>
                    <div className="write_data">작성일</div>
                    <div className="reco">추천</div>
                </div>
            </section>
        </main>
    )
}

export default Main