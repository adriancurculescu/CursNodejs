"use strict";

console.log("x");

var express = require('express');
var mongo = require('mongodb');
var uuidv4 = require('uuid/v4');

var mProducts = require('./modules/products');
var mOrders = require('./modules/orders');

var app = express();

// app.get('/', function (req, res){
//     res.send('Hello world!');
// });

//products related requests
{
    //create
    app.put('/products', function (req, res) {
        res.end();
    });

    //update
    app.post('/products', function (req, res) {
        res.end();
    });

    //get list
    app.get('/products', function (req, res) {
        res.end();
    });

    //delete
    app.delete('/products', function (req, res) {
        res.end();
    });
}


//Orders related request
{
    //create
    app.put('/orders', function (req, res) {
        res.end();
    });

    //update
    app.post('/orders', function (req, res) {
        res.end();
    });

    //get list
    app.get('/orders', function (req, res) {
        res.end();
    });

    //delete
    app.delete('/orders', function (req, res) {
        res.end();
    });
}


app.listen(3000, function () {
    console.log('Mongo Rest API listening on pport 3000');
});

