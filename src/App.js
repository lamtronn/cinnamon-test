import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Table from './components/Table/Table';

import './App.css';

function App() {
	return <div className="App">
    <Navigation/>
    <Table/>
    <Footer/>
  </div>;
}

export default App;
