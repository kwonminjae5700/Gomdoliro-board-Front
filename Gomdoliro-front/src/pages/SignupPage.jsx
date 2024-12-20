import {React, useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'

const SignupPage = () => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [sign, setSign] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickName, setName] = useState('')
    const [useNick, setUseNick] = useState(false)
    const nav = useNavigate()

    const testEmail = (word) => {
        let testWord = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

        return testWord.test(word)
    }

    const userPost = async () => {
        let check = testEmail(email)

        if(check) {
            try {
                const response = await axios.post(`${server}/signup`, {
                    email,
                    password
                })
                console.log('success')
                setPassword('')
                setSign('success')
            } catch(error) {
                alert('누군가 이 이메일을 사용 중입니다')
                setEmail('')
                setPassword('')
                setSign('')
            }
        } else {
            alert("이메일 형식이 올바르지 않습니다.")
            setEmail('')
            setPassword('')
        }
    }

    const namePost = async () => {
        try {
            const response = await axios.patch(`${server}/signup-name`, {
                email,
                nickName
            })
            alert('회원가입에 성공하셨습니다')
            setEmail('')
            nav("/")
        } catch(error) {
            console.error('Error : ', error)
        }
    }
    
    let canSignup = 0, canName = 0
    let buttonStyle = {
        backgroundColor : "#999999"
    }
    let nameButton = {
        backgroundColor : "#999999"
    }

    if(nickName.length > 0) {
        nameButton = {
            backgroundColor : "#1F8BFF"
        }

        canName = 1
    } else canName = 0

    if(email.length > 0 && password.length > 0) {
        buttonStyle = {
            backgroundColor : "#1F8BFF"
        }

        canSignup = 1
    } else canSignup = 0

    return (
        <div className="loginBackground">
            <main className="login-container">
                <h1>Sign up</h1>
                {sign !== 'success' ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <div>
                            <div className="login-input">
                                <input 
                                    type="text"
                                    placeholder="홍길동                                                      16"
                                    maxLength="16"
                                    value={nickName}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                                <h4 className="input-nick">닉네임을 입력해주세요.</h4>
                            </div>
                            <div className="login-null"></div>
                        </div>
                        <button style={nameButton} onClick={() => {
                            if(canName) {
                                namePost()
                            }
                        }}>완료</button>
                    </>
                )}
                <h3 onClick={() => {
                    nav("/")
                }} style={{color : '#1F8BFF'}}>로그인하기</h3>
            </main>
        </div>
    )
}

export default SignupPage