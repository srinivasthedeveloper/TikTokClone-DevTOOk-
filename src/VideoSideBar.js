import React from 'react';
import './VideoSideBar.css';
import HeartBorderIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HeartIcon from '@material-ui/icons/FavoriteSharp';
import MessageIcon from '@material-ui/icons/MessageSharp';
import ShareIcon from '@material-ui/icons/ShareSharp';


function VideoSideBar(){
    return (
    	<div className="videoSideBar">
    	<div ClassName="videoSideBar_button">
	    	<HeartBorderIcon />
	    	<p>444</p>
    	</div>
    	<div ClassName="videoSideBar_button">
	    	<HeartIcon />
	    	<p>444</p>
    	</div>
    	<div ClassName="videoSideBar_button">
	    	<MessageIcon />
	    	<p>444</p>
    	</div>
    	<div ClassName="videoSideBar_button">
	    	<ShareIcon />
	    	<p>444</p>
    	</div>
    	</div>
    );
};

export default VideoSideBar;
