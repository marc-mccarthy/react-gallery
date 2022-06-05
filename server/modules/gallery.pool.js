const pg = require('pg');

// DO NOT MODIFY THIS FILE FOR BASE MODE
let galleryPool = new pg.Pool({
    hostname: 'localhost',
    database: 'react_gallery',
    port: '5432',
    max: 20,
    idleTimeoutMillis: 30000
})

module.exports = galleryPool;