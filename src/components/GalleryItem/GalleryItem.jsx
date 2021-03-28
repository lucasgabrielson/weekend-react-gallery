import { useState } from 'react'; 
import './GalleryItem.css'
import { FaThumbsUp } from 'react-icons/fa'

function GalleryItem( props ) {
    const [showImage, setShowImage] = useState( false );

    let displayImage = () => {
        let display = <img onClick = {toggleImage} src={props.path} />
        if( showImage ) {
            display = <div onClick = {toggleImage} className='wrapper'><p>{props.description}</p></div>
        }
        return display;
    }

    let toggleImage = () => {
        setShowImage( !showImage );
    }

    return(
        <>
            <div>
                {displayImage()}
                <div>
                    <FaThumbsUp onClick = {() => props.addLike( props.id )} /> : {props.likes}  
                </div>    
            </div>
        </>
    )
}

export default GalleryItem