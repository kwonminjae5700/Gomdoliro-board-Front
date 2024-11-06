import {React, useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import FindPWInput from '../components/FindPWInput';
import CodeNumber from '../components/CodeNumber';
import '../styles/login.css';

const FindPWPage = () => {
    const server = import.meta.env.VITE_SERVER_ADDRESS
    const [email, setEmail] = useState('')
    const [nickname, setNickname] = useState('')
    const [input, setInput] = useState(false);
    const [buttonDo, setButtonDo] = useState('다음')
    const [codeCnt, setCodeCnt] = useState(false)
    const [send, setSend] = useState(false)
    const [passwordPage, setPasswordPage] = useState(false)
    const nav = useNavigate()
    
    const testEmail = (word) => {
        let testWord = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        return testWord.test(word)
    };

    const emailNumber = async () => {
        try {
            await axios.post(`${server}/email/sendCode`, {
                email
            })
        } catch(error) {
            console.error("Error : ", error)
        }
    };

    let next = 0
    let buttonStyle = {
        backgroundColor : "#999999"
    }

    if(email.length > 0 && nickname.length > 0 && buttonDo !== '인증하기' || codeCnt) {
        buttonStyle = {
            backgroundColor : "#1F8BFF"
        };
        next = 1
    } else {
        next = 0
    }

    return (
        <div className="loginBackground">
            <main className="login-container">
                <h1>Find PW</h1>
                {((buttonDo === '다음') || (buttonDo === '이메일 전송')) && 
                    <FindPWInput 
                        email={email}
                        setEmail={setEmail}
                        nickname={nickname}
                        setNickname={setNickname}
                        input={input}
                    />
                }
                {buttonDo === '인증하기' && !passwordPage && (
                    <CodeNumber 
                        email={email}
                        setCodeCnt={setCodeCnt}
                        send={send}
                        setButtonDo={setButtonDo}
                        setPasswordPage={setPasswordPage}
                    />
                )}
                {passwordPage && (
                    <div>
                        <div className="login-input">
                            <input 
                                type="password"    
                                placeholder="새 비밀번호"
                            />
                        </div>
                        <div className="login-input">
                            <input 
                                type="password" 
                                placeholder="새 비밀번호 확인"
                            />
                        </div>
                        <div className="RePassword">비밀번호를 재설정해주세요.</div>
                    </div>
                )}
                <button style={buttonStyle} onClick={() => {
                    if(next && buttonDo==='다음') {
                        if(testEmail(email)) {
                            setInput(true);
                            setButtonDo('이메일 전송');
                        } else {
                            alert("이메일 형식이 올바르지 않습니다.");
                            setEmail('');
                            setNickname('');
                        }
                    } else if(buttonDo === '이메일 전송') {
                        emailNumber();
                        setButtonDo('인증하기');
                    } else if(buttonDo === '인증하기') {
                        setSend(true);
                    } else if(buttonDo === '완료') {
                        
                    }
                }}>{buttonDo}</button>
                <div className="login-func">
                    <h3 onClick={() => {
                        nav("/signup");
                    }}>로그인하기</h3>
                </div>
            </main>
        </div>
    );
};

export default FindPWPage;
