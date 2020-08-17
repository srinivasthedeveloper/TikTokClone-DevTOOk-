import React,{useRef,useState} from 'react';
import VideoFooter from './videoFooter.js';
import VideoHeader from './videoHeader.js'
import "./Video.css";

function Video(){
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
			src="../a.mp4"> </video>
		<VideoHeader />
		<VideoFooter />
		{/* <VideoSidebar /> */}
		</div>
	);
}

export default Video;
