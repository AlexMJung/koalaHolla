var pg = require('pg');

var config = {
    database: 'betelguese',
    hots: 'localhost',
    port: 5432,
    max: 11,
    idleTimeoutMillis: 30001
};

module.exports= pg.Pool(config);