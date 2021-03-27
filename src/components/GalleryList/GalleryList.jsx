import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ) {
    return(
        <>
            { props.gallery.map( image => <GalleryItem description = { image.description } path = {image.path} id = {image.id} likes = { image.likes } addLike = { props.addLike } /> )}
        </>
    )
}

export default GalleryList;