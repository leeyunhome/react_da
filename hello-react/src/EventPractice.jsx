import React, { useState } from 'react';

const EventPractice = () => {
    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);
    // const onChangeInput = (e) => {
    //     setMessage({[e.target.name]: e.target.value});
    // };

    const onClickBtn = () => {
        alert(username + ': ' + message);
        setMessage('');
        setUsername('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClickBtn();
        }
    };

    return (
        <>
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={username}
                    onChange={onChangeUsername}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={message}
                    onChange={onChangeMessage}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={onClickBtn}>
                    확인
                </button>
            </div>
        </>
    );
};


export default EventPractice;