import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
	return <div>Hi!</div>;
};

//need to pass an instance of App to render, and target DOM element
ReactDOM.render(<App/>, document.querySelector('.container'));


