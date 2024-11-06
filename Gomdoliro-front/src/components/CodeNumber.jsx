import React, { useState, useRef } from 'react'
import '../styles/codenumber.css'

const CodeNumber = ({email, setCodeCnt}) => {
    const [code, setCode] = useState(["", "", "", "", "", ""]); // 6자리 예제
    const inputs = useRef([]);

    const inputCode = (value, index) => {
        if(/^[0-9]$/.test(value) || value === "") {
            let newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if(value && index < inputs.current.length - 1) {
                inputs.current[index + 1].focus();
            }

            if(newCode.every((char) => char !== "")) {
                setCodeCnt(true)
            } else setCodeCnt(false)
        }
    };

    const backSpaceInput = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    return (
        <div className="code-container">
            <span>{email}로 이메일이 전송되었습니다.</span>
            <div className="inputCodeBox">
                <span>인증번호 입력</span>
                <div className="inputCode">
                    {code.map((value, index) => (
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
}

export default CodeNumber