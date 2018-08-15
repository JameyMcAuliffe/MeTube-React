import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//es6 class component
//define class SearchBar and give it access to all functionality of React.Component
class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {term: ''};
	}
	//every class component has render method
	render() {
		//must return some jsx
		return (
			<div>
				<input
					value={this.state.term} 
					onChange={event => this.setState({term: event.target.value})} />
			</div>
		);
	}
}


export default SearchBar;


//functional component
// const SearchBar = () => {
// 	return <input />;
// }
