import React from 'react'
import '../styles/header.css'

const Header = () => {
    return (
        <header>
            <h2>BamGallery</h2>
            <span className="search_box">
                <label htmlFor="text"/>
                <input type="text" placeholder="검색어를 입력하세요"/>
                <img src="src/assets/search.png" alt="search"/>
            </span>
            <span className="user_list">
                <h3>내 게시물</h3>
                <img src="src/assets/user_line.png" className="user_line" alt="user_line"/>
                <h3>Jin_venus08</h3>
                <img src="src/assets/user_icon.png" className="user_ion" alt="user_icon"/>
            </span>
        </header>
    )
}

export default Header