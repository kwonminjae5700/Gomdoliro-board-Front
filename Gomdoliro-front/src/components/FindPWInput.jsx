import React from 'react'

const FindPWInput = ({email, setEmail, nickname, setNickname, input}) => {


    return (
        <>
            {!input ? (
                <div>
                    <div className="login-input">
                        <input 
                            type="text"    
                            placeholder="이메일 입력"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login-input">
                        <input 
                            type="text" 
                            placeholder="이름 입력"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                        />
                    </div>
                </div>
            ):(
                <div className="send-email">
                    <span style={{color : '#1F8BFF'}}>{email}</span>
                    <span>위 이메일로 인증번호를 전송하시겠습니까?</span>
                </div>
            )}
        </>
    )
}

export default FindPWInput