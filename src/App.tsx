import React from 'react';
import './App.scss';
import BottomNav from './bottomNav/BottomNav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/list"></Route>
					<Route path="/profile"></Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
				<BottomNav />
			</div>
		</Router>
	);
}

export default App;
