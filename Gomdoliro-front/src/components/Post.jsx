import React from 'react'
import '../styles/main.css'

const Post = ({post}) => {

    return (
        <div className="section_body">
            <div className="no">{post.id}</div>
            <div className="title">{post.title}</div>
            <div className="writer">kwon5700</div>
            <div className="write_data">2008.05.28</div>
            <div className="reco">13</div>
        </div>
    )
}

export default Post