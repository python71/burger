var express = require("express");
var burger = require("../models/burger.js");

// Create the router for the app, 
// and export the router at the end of your file.
var router = express.Router();

router.get('/', function(req, res) {
    burger.selectAll(function(data){
        console.log('get')
        res.render('index', {data});
    })
})

router.put('/burgers/:id', function(req, res) {
    console.log('put');
    console.log(req.params)
    burger.updateOne(req.params.id, function(data) {
        res.redirect('/');
    })
})

router.post('/burgers/create', function(req, res) {
    console.log('post')
    burger.insertOne(req.body.burger_name, function(data) {
        res.redirect('/');
    })
})

module.exports = router;