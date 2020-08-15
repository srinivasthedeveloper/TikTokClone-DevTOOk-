import React from 'react';
import Video from "./Video";
import './App.css';
// import logo from './logo.svg';

function App() {
  return (
    //BEM
    <div className="App">
      

    <div className="app__videos">
        <video />
        <Video />
        <Video />
        <Video />
        <Video />
        </div>
    </div>
  );
}

export default App;