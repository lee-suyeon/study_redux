import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';

const store = createStore(rootReducer); // 스토어를 만든다. 
console.log(store.getState()); // 스토어의 상태 확인
//counter: {number: 0, diff: 1}
//todos: []

// Provider로 store를 넣어서 App 을 감싸게 되면 
// 렌더링하는 그 어떤 컴포넌트던지 리덕스 스토어에 접근 할 수 있게 된다. 

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
