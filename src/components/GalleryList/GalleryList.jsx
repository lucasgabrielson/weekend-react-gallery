import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ) {
    return(
        <>
            { props.gallery.map( image => <GalleryItem decription = { image.description } path = {image.path} id = {image.id} likes = { image.likes } /> )}
        </>
    )
}

export default GalleryList;