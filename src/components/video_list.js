import React from 'react'
import VideoListItem from './video_list_item';

//need to pass props in to receive videos array from index.js
const VideoList = (props) => {

	const videoItems = props.videos.map((video) => {
		//need to add a key when rendering list of items
		return <VideoListItem key={video.etag} video={video}/>
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;
