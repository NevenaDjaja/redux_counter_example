import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { value, onIncrement, onDecrement } = this.props;
		// const value = this.props.value;
		return (
			<div>
				<p>Counter clicked: {value}</p>
				<button onClick = {onIncrement}> + </button>
				<button onClick = {onDecrement}> - </button>
			</div>
		)
	}
}


export default Counter;