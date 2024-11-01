import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/header.css'
import user_icon from '../assets/user_icon.png'
import search_icon from '../assets/search.png'
import user_line from '../assets/user_line.png'

const Header = ({search_Header, setSearch_Header}) => {
    const [name, setName] = useState(localStorage.getItem('nickname'))
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
                <img src={search_icon} alt="search"/>
            </span>
            <span className="user_list">
                <h3>내 게시물</h3>
                <img src={user_line} className="user_line" alt="user_line"/>
                <h3>{name}</h3>
                <img src={user_icon} className="user_ion" alt="user_icon"/>
            </span>
        </header>
    )
}

export default Header