const pg = require('pg');
require('dotenv').config();

/*
// Local Database
let galleryPool = new pg.Pool({
    hostname: 'localhost',
    database: 'react_gallery',
    port: '5432',
    max: 20,
    idleTimeoutMillis: 30000
})
*/

// Heroku Postgres Database connectionString
const galleryPool = new pg.Pool({
    label: 'React Gallery',
    connectionString: process.env.DATABASE_URL,
    max: 20,
    idleTimeoutMillis: 30000,
    ssl: true 
});

module.exports = galleryPool;