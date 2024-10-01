import React from 'react'
import '../styles/main.css'

const Main = () => {
    return (
        <main>
            <div className="write_filter">
                <span>
                    <div>작성일</div>
                    <div>인기글</div>
                </span>
                <button className="write_button">새 글 작성</button>
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