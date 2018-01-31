import React from 'react';
import ReactDOM from 'react-dom';
// import '../style/style.css';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAbFrjRhm9vxUthU2CH2TIUL0mrv11FXgU';

const App = () => {
	return(
		<div>
			<SearchBar />
		</div>
	)
};

const container = document.querySelector('.container');

ReactDOM.render(<App />, container);
