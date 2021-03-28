import GalleryItem from '../GalleryItem/GalleryItem';
import './GalleryList.css'

function GalleryList( props ) {
    return(
        <div className = "content">
            { props.gallery.map( image => <GalleryItem key = { image.id } description = { image.description } path = {image.path} id = {image.id} likes = { image.likes } addLike = { props.addLike } /> )}
        </div>
    )
}

export default GalleryList;