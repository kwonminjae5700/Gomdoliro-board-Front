import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import '../styles/codenumber.css';

const CodeNumber = ({ email, setCodeCnt, send, setButtonDo, setPasswordPage }) => {
    const server = import.meta.env.VITE_SERVER_ADDRESS;
    const [codeArrary, setCode] = useState(["", "", "", "", "", ""])
    const inputs = useRef([])

    useEffect(() => {
        if(send) {
            sendCode()
        }
    }, [send])

    const sendCode = async () => {
        try {
            let code = codeArrary.join("")
            console.log(email, code)

            const response = await axios.post(`${server}/email/verifyCode`, {
                email,
                code
            })

            if(response.data.success) {
                setPasswordPage(true)
                setButtonDo('완료')
            } else {
                alert("인증번호가 옳지 않습니다.")
                setCode(["", "", "", "", "", ""])
            }
        } catch(error) {
            console.error("Error : ", error)
        }
    };

    const inputCode = (value, index) => {
        if(/^[0-9]$/.test(value) || value === "") {
            let newCode = [...codeArrary]
            newCode[index] = value
            setCode(newCode)

            if(value && index < inputs.current.length - 1) {
                inputs.current[index + 1].focus()
            }

            if(newCode.every((char) => char !== "")) {
                setCodeCnt(true)
            } else {
                setCodeCnt(false)
            }
        }
    }

    const backSpaceInput = (e, index) => {
        if(e.key === "Backspace" && !codeArrary[index] && index > 0) {
            inputs.current[index - 1].focus()
        }
    }

    return (
        <div className="code-container">
            <span>{email}로 이메일이 전송되었습니다.</span>
            <div className="inputCodeBox">
                <span>인증번호 입력</span>
                <div className="inputCode">
                    {codeArrary.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => inputCode(e.target.value, index)}
                            onKeyDown={(e) => backSpaceInput(e, index)}
                            ref={(el) => inputs.current[index] = el}
                        />
                    ))}
                </div>
                <div className="codeResend">인증번호 재전송</div>
            </div>
        </div>
    );
};

export default CodeNumber;
