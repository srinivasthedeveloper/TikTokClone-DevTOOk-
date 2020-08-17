import React from 'react';
import "./videoFooter.css";
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNoteSharp';
import LibraryIcon from '@material-ui/icons/LibraryMusicSharp';


function VideoFooter(){
	return (
		<div className="videoFooter">
			<div className="videoFooter_text">
				<h4>@NeverBackDown</h4>
				<p>Still I am in the hall of fame so be carefull</p>
				<div className="videoFooter_record">
					<LibraryIcon style={{fontSize:"50px"}} />
				</div>
				<div className="videoFooter_ticker">
					<MusicNoteIcon className="videoFooter_icon"/>
					<Ticker mode="smooth">
						{({ index }) =>(
							<>
							<p><b>Hello Buddy</b></p>
							</>
						)}
					</Ticker>
				</div>
			</div>
		</div>
		);
}

export default VideoFooter;