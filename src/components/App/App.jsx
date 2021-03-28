import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'; 
import GalleryList from '../GalleryList/GalleryList';
import Form from '../Form/Form'
import swal from 'sweetalert';

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

    const deleteImage = ( id ) => {
      console.log( 'in deleteImage' );
      swal({
        title: 'Are you sure you want to delete this image',
        text: '. . . forever?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      }).then( willDelete => {
        if( willDelete ) {
          swal( 'The image in question has been neutralized!', {
            icon: 'success',
          });
          axios.delete( '/gallery/' + id )
            .then( response => {
              console.log( response );
              getGallery();
            }).catch( err => {
              alert( 'error deleting image' );
              console.log( err );
            })
        } else {
          swal( 'The image is safe -- for now' );
        }

      }) // end sweetalert  
    } // end deleteImage

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
        <GalleryList gallery={ gallery } addLike = {addLike} deleteImage = { deleteImage } />
        <p>&copy; Lucas Gabrielson </p>
      </div>
    );
}

export default App;
