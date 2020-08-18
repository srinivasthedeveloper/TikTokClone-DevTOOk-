import React,{useRef,useState} from 'react';
import VideoFooter from './videoFooter.js';
import VideoHeader from './videoHeader.js';
import VideoSidebar from './VideoSideBar.js';
import "./Video.css";

function Video({url,userName,description,song,likes,messages,shares}){
	const [playing,setPlaying]=useState(false);
	const videoRef=useRef(null);	
	const onVideoPress = () => {
		if(playing){
			videoRef.current.pause();
			setPlaying(false);
		}
		else{
		videoRef.current.play();
		setPlaying(true);
		}
	}

	return(
		<div className="video">
			<video className="video__player" 
			loop
			onClick={onVideoPress}
			ref={videoRef}
			src={url}> </video>
			<VideoHeader 
			userName={userName}/>
			<VideoFooter 
			userName={userName} 
			description={description}
			song={song}/>
			<VideoSidebar 
			likes={likes} 
			messages={messages} 
			shares={shares} />
		</div>
	);
}

export default Video;
