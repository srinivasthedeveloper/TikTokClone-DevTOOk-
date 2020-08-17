import React from 'react';
import './VideoSideBar.css';
import HeartBorderIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HeartIcon from '@material-ui/icons/FavoriteSharp';
import MessageIcon from '@material-ui/icons/MessageSharp';
import ShareIcon from '@material-ui/icons/ShareSharp';


function VideoSideBar(){
    return (
    	<div className="videoSideBar">
    	<HeartBorderIcon />
    	<p>444</p>
    	<HeartIcon />
    	<p>444</p>
    	<MessageIcon />
    	<p>444</p>
    	<ShareIcon />
    	<p>444</p>
    	</div>
    );
};

export default VideoSideBar;
