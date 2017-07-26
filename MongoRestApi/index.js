"use strict";

console.log("x");

var express = require('express');
var mongo = require('mongodb');
var uuidv4 = require('uuid/v4');

//mongo client instance
var MongoClient = mongo.MongoClient;

// config via module
var config = require("./modules/config");
var MongoUrl = config.mongoUrl; 
// "mongodb://user:userpass@ds055862.mlab.com:55862/trainingnodejs"

var mProducts = require('./modules/products');
mProducts.config.mongoClient = mongoClient;
mProducts.config.mongoUrl = mongoUrl;

var mOrders = require('./modules/orders');
mOrders.config.mongoClient = mongoClient;
mOrders.config.mongoUrl = mongoUrl;

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
        var products = mProducts.listProducts();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(products));
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

