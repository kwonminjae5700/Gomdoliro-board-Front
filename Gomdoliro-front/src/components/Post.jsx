import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/main.css'

const Post = ({post}) => {
    const nav = useNavigate()

    return (
        <div className="section_body" onClick={() => {nav(`/read/${post.id}`)}}>
            <div className="no">{post.id}</div>
            <div className="title">{post.title}</div>
            <div className="writer">kwon5700</div>
            <div className="write_data">{post.date}</div>
            <div className="reco">13</div>
        </div>
    )
}

export default Post