import React from 'react';

//pulls video off of props, same thing as defining const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img src={imageUrl} className="media-object" />
				</div>

				<div className="media-body">
					<div className="media-headig">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;
