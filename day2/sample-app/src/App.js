import React, { Component } from 'react';
import './App.css';
import Customer from './Customer'

class App extends Component {
	render() {
		return (
			<Customer name="Modi"
				title="Mr"
				data={{
					age: 60
				}}/>
		);
	}
}

export default App
