import React from 'react';
import "./videoHeader.css";
import MusicNoteIcon from '@material-ui/icons/MusicNoteOutlined';

function VideoHeader({appName,userName}){
	return (
		<div className="videoHeader">
			<div className="videoHeader_text">
				<h2>TheDevop</h2>
				<MusicNoteIcon className="videoHeader_icon"/>
				<p><b>@{userName}</b></p>
			</div>
		</div>
		);
}

export default VideoHeader;