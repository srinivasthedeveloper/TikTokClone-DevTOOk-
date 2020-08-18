import React, {useState} from 'react';
import './VideoSideBar.css';
import HeartBorderIcon from '@material-ui/icons/FavoriteBorderOutlined';
import HeartIcon from '@material-ui/icons/FavoriteSharp';
import MessageIcon from '@material-ui/icons/MessageSharp';
import ShareIcon from '@material-ui/icons/ShareSharp';


function VideoSideBar({likes,messages,shares}){

	const [liked,setLiked]=useState(false);

    return (
    	<div className="videoSideBar">
	    	<div className="videoSideBar_button">
		    	{liked ?(
		    		<HeartIcon className="icon_color" fontSize="large" onClick={e => setLiked(false)} />
			    	):(
		    		<HeartBorderIcon fontSize="large" onClick={e => setLiked(true)} />
		    		)}
			    <p>{liked ? likes+=1: likes}</p>
	    	</div>
	    	<div className="videoSideBar_button">
		    	<MessageIcon fontSize="large" />
		    	<p>{messages}</p>
	    	</div>
	    	<div className="videoSideBar_button">
		    	<ShareIcon fontSize="large" />
		    	<p>{shares}</p>
	    	</div>
    	</div>
    );
};

export default VideoSideBar;
