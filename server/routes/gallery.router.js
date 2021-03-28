const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require( '../modules/pool');


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

router.post( '/', ( req, res ) => {
    console.log( 'gallery.router POST' );
    let sqlText = 'INSERT INTO gallery (path, description, likes) VALUES ($1, $2, $3)';
    pool.query( sqlText, [ req.body.path, req.body.description, req.body.likes ] )
        .then( results => {
            res.sendStatus( 201 );
        }).catch( err => {
            console.log( err );
            res.sendStatus( 500 );
        })
})

router.delete( '/:id', ( req, res ) => {
    console.log( 'gallery.router delete' );
    let sqlText = 'DELETE FROM gallery WHERE "id" = $1';
    pool.query( sqlText, [ req.params.id ])
        .then( results => {
            res.sendStatus( 200 );
        }).catch( err => {
            console.log( err );
            res.sendStatus( 500 ); 
        })
})

module.exports = router;