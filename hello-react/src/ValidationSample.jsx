import React, { Component, createRef } from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false,
    };

    handleChange = (e) => {
        // console.log(e.target.value);
        this.setState({
            password: e.target.value
        });
        // this.handleFocus();
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        // this.handleFocus();
        this.input.focus();
    }

    handleFocus = () => {
        this.inputRef.current.focus();
    }

    inputRef = createRef();
    
    render() {
        const { password, clicked, validated } = this.state;
        
        // console.log(`validated: ${validated}`);
        return (
            <>
                <div>
                    <input
                        ref={(ref) => this.input = ref}
                        type="password"
                        value={password}
                        onChange={this.handleChange}
                        className={clicked ? 
                            (validated ? 'success' : 'failure') : ''}
                    />
                    <button onClick={this.handleButtonClick}>검증하기</button>
                </div>
            </>
        );
    }
}

export default ValidationSample;