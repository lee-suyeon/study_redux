import React from 'react';

function Counter ({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = (e) => {
        // e.target.value의 타입은 문자열이기 때문에 숫자로 변환해주어야 한다. 
        onSetDiff(Number(e.target.value));
    };
    return (
        <>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </>
    );
}

export default Counter;