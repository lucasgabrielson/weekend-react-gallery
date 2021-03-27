const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require( '../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// // PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// PUT Route
router.put( '/like/:id', ( req, res ) => {
    console.log( req.params );
    const galleryId = req.params.id;
    const sqlText = `UPDATE gallery SET likes = likes + 1 WHERE id = $1`;
    pool.query( sqlText, [ galleryId ] ).then( results => {
        res.sendStatus( 200 );
    }).catch( err => {
        res.sendStatus( 500 );
    })
})

// // GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// GET Route
router.get( '/', ( req, res ) => {
    console.log( 'gallery.router GET' );
    let sqlText = 'SELECT * FROM gallery ORDER BY "id" ASC';
    pool.query( sqlText ).then( results => {
        console.log( results.rows );
        res.send( results.rows ); 
    }).catch( err => {
        console.log( err );
        res.sendStatus( 500 );
    })
})

module.exports = router;