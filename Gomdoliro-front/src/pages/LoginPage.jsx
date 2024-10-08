import {React, useState} from 'react'
import '../styles/login.css'

const LoginPage = () => {
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
                <h1>Login</h1>
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
                <button style={buttonStyle}>로그인</button>
                <h3>회원가입하기</h3>
            </main>
        </div>
    )
}

export default LoginPage