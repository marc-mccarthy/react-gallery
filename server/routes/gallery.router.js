const express = require('express');
const galleryRouter = express.Router();
// const galleryItems = require('../modules/gallery.data')
const pool = require('../modules/gallery.pool');

/* Base Mode
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
    res.send(galleryItems);
}); // END GET Route
*/

// Bypass encryption for Heroku Postgres testing
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// POST Route
galleryRouter.post('/', (req, res) => {
    console.log(req.body);
    let queryString = 'INSERT INTO gallery ("path", "description") VALUES ($1, $2)';
    let values = [req.body.path, req.body.description];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(result => {
        res.sendStatus(500);
    })
}); // End POST Route

// GET Route
galleryRouter.get('/', (req, res) => {
    let queryString = 'SELECT * FROM gallery ORDER BY id ASC'
    pool.query(queryString).then(result => {
        res.send(result.rows);
    }).catch(error => {
        res.sendStatus(200);
    })
}); // END GET Route

// PUT Route
galleryRouter.put('/like/:id', (req, res) => {
    console.log(req.params);
    let queryString = 'UPDATE gallery SET likes = likes + 1 WHERE id = $1';
    let values = [req.params.id];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(result => {
        res.sendStatus(500);
    })
}); // END PUT Route

// DELETE Route
galleryRouter.delete('/:id', (req, res) => {
    console.log(req.params);
    let queryString = 'DELETE FROM gallery WHERE id = $1';
    let values = [req.params.id];
    pool.query(queryString, values).then(result => {
        res.sendStatus(200);
    }).catch(result => {
        res.sendStatus(500);
    })
}); // END DELETE Route

module.exports = galleryRouter;
