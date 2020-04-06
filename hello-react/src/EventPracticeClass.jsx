import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        message: '',
        username: '',
    };

    // constructor(props) {
    //     super(props);
    //     this.onChangeInput = this.onChangeInput.bind(this);
    // }
    // onChangeInput(e) {
    //     this.setState({
    //         message: e.target.value
    //     })
    // }

    onChangeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    onClickBtn = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            message: '',
            username: '',
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.onClickBtn();
        }
    };

    render() {
        return (
            <>
                <div>
                    <h1>이벤트 연습</h1>
                    <input
                        type="text"
                        name="username"
                        placeholder="사용자명"
                        value={this.state.username}
                        onChange={this.onChangeInput}
                    />
                    <input
                        type="text"
                        name="message"
                        placeholder="아무거나 입력해 보세요"
                        value={this.state.message}
                        onChange={this.onChangeInput}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.onClickBtn}>
                        확인
                    </button>
                    {/* <h2>{this.state.message}</h2> */}
                </div>
            </>
        );
    }
}

export default EventPractice;