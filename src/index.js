import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAgiCgzbfrwYUIBdTh4gnE8Lrie5tFuT8E';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {videos: []};

		YTSearch({key: API_KEY, term: 'UNC Football'}, (videos) => {
			this.setState({videos});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
};

//need to pass an instance of App to render, and target DOM element
ReactDOM.render(<App/>, document.querySelector('.container'));


