import { useState } from 'react'; 
import './GalleryItem.css'

function GalleryItem( props ) {
    const [showImage, setShowImage] = useState( false );

    let displayImage = () => {
        let display = <img src={props.path} />
        if( showImage ) {
            display = <div className='wrapper'><p>{props.description}</p></div>
        }
        return display;
    }

    let toggleImage = () => {
        setShowImage( !showImage );
    }
    return(
        <>
            <div onClick = {toggleImage}>
                {displayImage()}
                <p>Likes: {props.likes}</p>
                <button onClick = {() => props.addLike( props.id )}>Like Me</button>
            </div>
        </>
    )
}

export default GalleryItem