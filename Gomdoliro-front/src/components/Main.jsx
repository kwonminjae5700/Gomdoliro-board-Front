import React from 'react'
import Button from '../components/Button'
import Posts from '../components/Posts'
import '../styles/main.css'

const Main = ({searchValue}) => {

    return (
        <main>
            <div className="write_filter">
                <span>
                    <div>작성일</div>
                    <div>인기글</div>
                </span>
                <Button text={"새 글 작성"} buttonColor={"#1F8BFF"}/>
            </div>
            <section>
                <div className="section_title">
                    <div className="no">no</div>
                    <div className="title">제목</div>
                    <div className="writer">작성자</div>
                    <div className="write_data">작성일</div>
                    <div className="reco">추천</div>
                </div>
                <Posts searchValue={searchValue}/>
            </section>
        </main>
    )
}

export default Main