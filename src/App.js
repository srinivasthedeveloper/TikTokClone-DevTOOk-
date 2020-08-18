import React,{useState,useEffect} from 'react';
import Video from "./Video";
import database from "./firebase.js";
import './App.css';

function App() {
    const [videos,setVideos]=useState([])

    useEffect(()=>{
        database.collection("TheDevopVideos").onSnapshot(snapshot => (
                setVideos(snapshot.docs.map(doc => doc.data()))
            ))
    },[])
  return (
    //BEM
    <div className="App">
    <div className="app__videos">

        {videos.map(({url,userName,description,song,likes,messages,shares}) => (
            <Video 
            url={url}
            userName={userName}
            description={description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}/>
            ))}
        </div>
    </div>
  );
}

export default App;