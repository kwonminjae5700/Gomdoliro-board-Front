import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'

const LoginPage = ({setUserLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const nav = useNavigate()

    const Login = async () => {
        try {
            const response = await axios.post('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/login', {
                email,
                password
            })

            setUserLogin(response.data.nickname)
            setEmail('')
            setPassword('')
            
            nav("/main")
            
        } catch(error) {
            alert("이메일 또는 비밀번호가 틀렸습니다")
            setEmail('')
            setPassword('')
        }
    }

    let canLogin = 0
    let buttonStyle = {
        backgroundColor : "#999999"
    }

    if(email.length > 0 && password.length > 0) {
        buttonStyle = {
            backgroundColor : "#1F8BFF"
        }
        canLogin = 1
    } else {
        canLogin = 0
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
                    if(canLogin) {
                        Login()
                    }
                }}>로그인</button>
                <h3 onClick={() => {
                    nav("/signup")
                }}>회원가입하기</h3>
            </main>
        </div>
    )
}

export default LoginPage