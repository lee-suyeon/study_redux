import { createStore } from 'redux';

// redux에서 관리 할 상태 정의 
const initialState = {
    counter: 0,
    text: '',
    list: []
}

//액션 타입 정의
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// 액션 생성함수 정의 
const increase = () => ({
    type: INCREASE
});
const decrease = () => ({
    type: DECREASE
});
const changeText = text => ({
    type: CHANGE_TEXT,
    text
});
const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

// 리듀서 만들기
// 액션 생성함수들을 통해 만들어진 객체를 참조하여
// 새로운 상태를 만드는 함수를 만든다. 
// 리듀서에서는 *불변성*을 꼭 지켜줘야한다. 

function reducer (state = initialState, action){ // state의 초기값을 initialState로 지정
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state;
    }
}

//스토어 만들기
const store = createStore(reducer);
console.log('store', store);

// 현재 store 안에 들어있는 상태를 조회
console.log(store.getState()); // {counter: 0, list: [], text: ""}

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
    const state = store.getState();
    console.log(state);
}

// 구독을 해제하고 싶을 때는 unsubscribe()을 호출한다. 
const unsubscribe = store.subscribe(listener);

// 액션들을 디스패치
store.dispatch(increase()); // counter + 1 -> 1
store.dispatch(decrease()); // counter - 1 -> 0
store.dispatch(changeText('리덕스 연습'));
store.dispatch(addToList({id: 1, text: 'react-redux'}));
