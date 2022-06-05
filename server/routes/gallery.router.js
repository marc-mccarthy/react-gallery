const express = require('express');
const galleryRouter = express.Router();
const pool = require('../modules/gallery.pool');

// PUT Route
galleryRouter.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
galleryRouter.get('/', (req, res) => {
    let queryString = 'Select * FROM gallery'
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error => {
        res.sendStatus(200);
    })
}); // END GET Route

module.exports = galleryRouter;