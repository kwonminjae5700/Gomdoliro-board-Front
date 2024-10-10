import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/header.css'

const Header = ({search_Header, setSearch_Header, userLogin}) => {
    const nav = useNavigate()

    return (
        <header>
            <h2 onClick={()=>{nav("/main")}}>BamGallery</h2>
            <span className="search_box">
                <label htmlFor="text"/>
                <input 
                    type="text" 
                    placeholder="검색어를 입력하세요"
                    value={search_Header}
                    onChange={(e) => setSearch_Header(e.target.value)}
                />
                <img src="src/assets/search.png" alt="search"/>
            </span>
            <span className="user_list">
                <h3>내 게시물</h3>
                <img src="src/assets/user_line.png" className="user_line" alt="user_line"/>
                <h3>{userLogin}</h3>
                <img src="src/assets/user_icon.png" className="user_ion" alt="user_icon"/>
            </span>
        </header>
    )
}

export default Header