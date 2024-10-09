import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'

const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const userPost = async () => {
        try {
            const response = await axios.post('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/signup', {
                email,
                password
            })
            console.log('success')
            setEmail('')
            setPassword('')
            nav("/")
        } catch(error) {
            console.error('Error', error)
        }
    }
    
    let canSignup = 0
    let buttonStyle = {
        backgroundColor : "#999999"
    }

    if(email.length > 0 && password.length > 0) {
        buttonStyle = {
            backgroundColor : "#1F8BFF"
        }

        canSignup = 1
    } else {
        canSignup = 0
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
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div className="login-input">
                        <input 
                            type="password" 
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <button style={buttonStyle} onClick={() => {
                    if(canSignup) {
                        userPost()
                    }
                }}>회원가입</button>
                <h3 onClick={() => {
                    nav("/")
                }}>로그인하기</h3>
            </main>
        </div>
    )
}

export default SignupPage