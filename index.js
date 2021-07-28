
"use strict"; 
// const fs = require("fs");  // file sysem inside node.js

import * as car from "./data.js"; 

// var express = require('express');
import express from "express";
import handlebars from "express-handlebars";


const app = express(); // instance of express applicatoin 
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodiesarse URL-encoded bodies/ use to submit js objects
app.use(express.json()); /// use to submit info as a  js objects

app.engine('hbs', handlebars({defaultLayout: "main.hbs"}));
app.set("view engine", "hbs");

app.get('/', (req,res) => {

   res.render('home', {cars: car.getAll()});
   });

   // send plain text response
app.get('/about', (req,res) => {
   res.type('text/plain');

   res.send(JSON.stringify(car.getAll()));
});

app.get("/detail", (req , res) => {
   console.log(req.query);
   let result = car.getItem(req.query.model);
   res.render('detail', {model: req.query.model, result});

});


   app.use((req,res) => {
   res.type('text/plain');
   res.status(404);
   res.send('404 - Not found');
   });





app.listen(app.get('port'), () => {

   console.log('Express started');

});