import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAgiCgzbfrwYUIBdTh4gnE8Lrie5tFuT8E';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [], 
			selectedVideo: null
		};

		YTSearch({key: API_KEY, term: 'Coby White'}, (videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
					videos={this.state.videos}/>
			</div>
		);
	}
};

//need to pass an instance of App to render, and target DOM element
ReactDOM.render(<App/>, document.querySelector('.container'));


