import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ImageCard from './components/imagecard';

function App() {
  return (
    <div id="App">
      <Navbar />
      <div className="container">
        <p className="title">Load your images here</p>
        <div className="row">
          <div className="col s4">
            <ImageCard title="Front yard" />
          </div>
          <div className="col s4">
            <ImageCard title="Living room" buttonTitle="Upload"/>
          </div>
          <div className="col s4">
            <ImageCard title="Kitchen" buttonTitle="Upload"/>
          </div>
          <div className="col s4">
            <ImageCard title="Patio" buttonTitle="Upload"/>
          </div>
          <div className="col s4">
            <ImageCard title="Bathroom" buttonTitle="Upload"/>
          </div>
          <div className="col s4">
            <ImageCard title="Backyard" buttonTitle="Upload"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
