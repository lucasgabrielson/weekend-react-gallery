import { useState } from 'react'; 
import './GalleryItem.css';
import { FaThumbsUp } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

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
                <div className = 'reaction'>
                    <span className = "likes"><FaThumbsUp onClick = {() => props.addLike( props.id )} /> : {props.likes} </span>           
                    <span className = "delete"><FaTimes style={ {color:'red'} } onClick = {() => props.deleteImage( props.id )} /></span>
                </div>    
            </div>
        </>
    )
}

export default GalleryItem