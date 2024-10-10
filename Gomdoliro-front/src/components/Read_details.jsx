import React from 'react'
import '../styles/read_details.css'

const Read_details = ({writer}) => {

    return (
        <div className="read_details"> 
            <span className="reco_container">
                <span className="reco">
                    <h4>추천</h4>
                    <h3>0</h3>
                </span>

                <span className="reco">
                    <h4>댓글</h4>
                    <h3>0</h3>
                </span>
            </span>

            <span className="reco_info">
                <h4>{writer}</h4>
                <button>팔로우</button>
            </span>
        </div>
    )
}

export default Read_details