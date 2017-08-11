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

router.post('/', function(req, res) {
    console.log('message post was hit! booyah!');
    pool.connect(function(errorConnectingToDatabase, client, done) {
        if (errorConnectingToDatabase){
            console.log('Error connecting to database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('INSERT INTO koalas (name, gender, age, ready_for_transfer, notes) VALUES ($1, $2, $3, $4, $5);', [req.body.name, req.body.gender, req.body.age,req.body.ready_for_transfer, req.body.notes], function(errorMakingQuery, result) {
               done(); 
               if (errorMakingQuery) {
                   console.log('Error making database query' , errorMakingQuery);
                   res.sendStatus(500);
               } else {
                   res.sendStatus(201);
               }
            })
        }
    }) //ends pool.connect
}) // ends router.post



module.exports = router;