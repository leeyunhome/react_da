import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);
    const [fixedNumber, setFixedNumber] = useState(0);

    return (
        <div>
            <h1>{number}</h1>
            <button
                onClick={() => {
                    setNumber(number + 1);
                }}
            >
                +1
            </button>
        </div>
    );
};

export default Counter;