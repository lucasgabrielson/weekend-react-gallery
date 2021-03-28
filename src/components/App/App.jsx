import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import GalleryList from '../GalleryList/GalleryList';
import Form from '../Form/Form'

function App() {
    // load students on DOM load
    useEffect(() => { getGallery() }, [])

    const [ gallery, setGallery ] = useState([]);
    const [ imageAddress, setImageAddress ] = useState( '' );
    const [ imageDescription, setImageDescription ] = useState( '' );

    const addImage = () => {
      console.log( 'in addImage' );
      axios.post( '/gallery', {
        path: imageAddress,
        description: imageDescription,
        likes: 0
      }).then( response => {
        console.log( 'back from POST with', response);
        setImageAddress( '' );
        setImageDescription( '' );
        getGallery();
      }).catch( err => {
        alert( 'error adding image' );
        console.log( err );
      })
    }

    const getGallery = () => {
      console.log( 'in getGallery' );
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
        <Form
          imageAddress = { imageAddress }
          setImageAddress = { setImageAddress }
          imageDescription = { imageDescription }
          setImageDescription = { setImageDescription }
          addImage = { addImage }
        />
        <GalleryList gallery={ gallery } addLike = {addLike} />
        <p>&copy; Lucas Gabrielson </p>
      </div>
    );
}

export default App;
