import { useState } from 'react'; 

function GalleryItem( props ) {
    const [showImage, setShowImage] = useState( false );

    let displayImage = () => {
        let display = <img src={props.path} />
        if( showImage ) {
            display = <p>{props.description}</p>
        }
        return display;
    }

    let toggleImage = () => {
        setShowImage( !showImage );
    }
    return(
        <>
            <div onClick = {toggleImage}>{displayImage()}</div>    
        </>
    )
}

export default GalleryItem