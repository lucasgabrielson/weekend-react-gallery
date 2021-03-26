import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'; 

function App() {
    // load students on DOM load
    useEffect(() => { getGallery() }, [])
    
    const [ gallery, setGallery ] = useState([]);

    const getGallery = () => {
      console.log( 'in getGalley' );
      axios.get( '/gallery' )
        .then( response => {
          console.log( 'back from GET with', response.data);
        })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/fran_cream_ale.jpg" height='200' width='200'/>
      </div>
    );
}

export default App;
