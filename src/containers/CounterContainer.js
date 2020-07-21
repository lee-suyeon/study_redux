import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    // useSelector : 리덕스 스토어의 상태를 조회하는 Hook
    //state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }));

    // useDispatch: 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = (diff) => dispatch(setDiff(diff));

    return (
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
            ></Counter>
    );
}

export default CounterContainer;