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

    const addLike = ( id ) => {
      console.log( 'in addLike', id);
      axios.put( '/gallery/like/' + id )
        .then( response => {
          console.log( 'back from PUT with', response );
          getGallery();
        }).catch( err => {
          console.log( err );
          alert( 'erroring updating likes' );
        })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList gallery={ gallery } addLike = {addLike} />
      </div>
    );
}

export default App;
