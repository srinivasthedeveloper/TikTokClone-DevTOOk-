import React from 'react';
import Video from "./Video";
import './App.css';

function App() {
  return (
    //BEM
    <div className="App">
    <div className="app__videos">
        <Video 
            url="./a.mp4"
            appName="TheDevop"
            userName="NeverBackDown"
            description="Hey You watch OUt..."
            song="hall of fame"
            likes={443}
            messages={123}
            shares={999}
        />
        <Video />
        <Video />
        <Video />
        <Video />
        </div>
    </div>
  );
}

export default App;