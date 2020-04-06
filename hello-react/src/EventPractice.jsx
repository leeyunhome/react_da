import React, { useState } from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });
    const { username, message } = form;
    
    const onChangeInput = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    const onClickBtn = () => {
        alert(username + ': ' + message);
        setForm({
            username: '',
            message: '',
        })
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
                    onChange={onChangeInput}
                    onKeyPress={handleKeyPress}

                />
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={message}
                    onChange={onChangeInput}
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