import {React, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/login.css'

const SignupPage = () => {
    const [sign, setSign] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nickName, setName] = useState('')
    const nav = useNavigate()

    const userPost = async () => {
        try {
            const response = await axios.post('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/signup', {
                email,
                password
            })
            console.log('success')
            setPassword('')
            setSign('success')
        } catch(error) {
            setSign('')
        }
    }

    const namePost = async () => {
        try {
            const response = await axios.patch('https://port-0-gomdoliro-board-back-m1qhzohka7273c65.sel4.cloudtype.app/signup-name', {
                email,
                nickName
            })
            alert('회원가입에 성공하셨습니다')
            setEmail('')
            nav("/")
        } catch(error) {
            console.log(email)
            alert('이미 사용 중인 이름입니다')
            setName('')
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
                                    maxlength="16"
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
                }}>로그인하기</h3>
            </main>
        </div>
    )
}

export default SignupPage