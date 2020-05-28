import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';

import './App.css';

function App() {
	return (
		<div className="App">
			<div className="wrapper">
				<div className="wrapper-background-1">
					<Navigation />
					<Table />
					<Footer />
				</div>
				<div className="wrapper-background-2"></div>
			</div>
		</div>
	);
}

export default App;
