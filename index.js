import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducers/index';
import Counter from './components/Counter';

const store = createStore(counter);
const $el = document.getElementById('root');

const render = () => {
	ReactDOM.render(
		<Counter value={store.getState()} 
		onIncrement={() => store.dispatch({type: 'INCREMENT'}) } 
		onDecrement={() => store.dispatch({type: 'DECREMENT'}) }	/>, $el
	)
};

render();
store.subscribe(render);