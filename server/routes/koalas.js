var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

router.get('/', function(req, res){
    pool.connect(function(errorConnectingToDatabase,client, done){
        if(errorConnectingToDatabase){
            console.log('error connection to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM koalas;',function(errorMakingQuery, result){
                done();
                if (errorMakingQuery) {
                    console.log('Error making database query', errorMakingQuery);
                    res.sendStatus(500);
                }else {
                    res.send(result.rows);
                }//end of second else
            })//end of client.query
        }//end of first else
    })//end of pool
})//router.get

module.exports = router