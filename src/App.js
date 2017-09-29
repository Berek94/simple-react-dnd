import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DndContainer from './components/DndContainer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<DndContainer />
			</div>
		);
	}
}

export default App;
