import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import Counter from '../components/counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    // useSelector : 리덕스 스토어의 상태를 조회하는 Hook
    //state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
    // 최적화 -> useSelector를 통해 매번 렌더링 될 때마다 새로운 객체 { number, diff }를
    // 만들기 때문에 상태가 바뀌었는지 바뀌지 않았는지 확인 할 수 없다. 
    // 1. useSelector를 여러번 사용한다. -> 해당 값들이 하나라도 바뀌었을 때에만 컴포넌트가 리렌더링된다. 
    // const number = useSelector(state => state.counter.number);
    // const diff = useSelector(state => state.counter.diff);
    // 2. react-redux의 shallowEqual 함수를 useSelector의 두번째 인자로 전달해준다. 
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff,
    }), shallowEqual);

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