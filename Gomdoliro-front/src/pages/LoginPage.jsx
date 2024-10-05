import React from 'react'
import '../styles/login.css'

const LoginPage = () => {


    return (
        <div className="loginBackground">
            <main className="login-container">
                <h1>Login</h1>
                <div>
                    <div className="login-input">
                        <input type="text" placeholder="아이디 입력"/>
                    </div>
                    <div className="login-input">
                        <input type="text" placeholder="비밀번호 입력"/>
                    </div>
                </div>
                <button></button>
            </main>
        </div>
    )
}

export default LoginPage