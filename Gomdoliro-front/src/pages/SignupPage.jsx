import {React, useState} from 'react'
import '../styles/login.css'

const SignupPage = () => {
    const [userId, setUserId] = useState('')
    const [userPW, setUserPW] = useState('')

    let buttonStyle = {
        backgroundColor : "#999999"
    }

    if(userId.length > 0 && userPW.length > 0) {
        buttonStyle = {
            backgroundColor : "#1F8BFF"
        }
    }

    return (
        <div className="loginBackground">
            <main className="login-container">
                <h1>Sign up</h1>
                <div>
                    <div className="login-input">
                        <input 
                            type="text"    
                            placeholder="이메일 입력"
                            value={userId}
                            onChange={(e) => {
                                setUserId(e.target.value)
                            }}
                        />
                    </div>
                    <div className="login-input">
                        <input 
                            type="password" 
                            placeholder="비밀번호 입력"
                            value={userPW}
                            onChange={(e) => {
                                setUserPW(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <button style={buttonStyle}>회원가입</button>
                <h3>로그인하기</h3>
            </main>
        </div>
    )
}

export default SignupPage