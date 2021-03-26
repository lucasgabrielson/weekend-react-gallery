import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import GalleryList from '../GalleryList/GalleryList';

function App() {
    // load students on DOM load
    useEffect(() => { getGallery() }, [])

    const [ gallery, setGallery ] = useState([]);

    const getGallery = () => {
      console.log( 'in getGalley' );
      axios.get( '/gallery' )
        .then( response => {
          console.log( 'back from GET with', response.data);
          setGallery( response.data );
        })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList gallery={ gallery } />
      </div>
    );
}

export default App;
