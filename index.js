const data = require('./data'); // files you crea


var express = require('express');
var app = express();


import express from 'express';

const app = express(); // instance of express applicatoin 

app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files


app.use(express.urlencoded()); //Parse URL-encoded bodies/ use to submit js objects
app.use(express.json()); /// use to submit info as a  js objects

app.engine('hbs', handlebars({defaultLayout: false}));
app.set("view engine", "hbs");


//  ROUT   send static file as response

app.get('/', (req,res) => {
    res.type('text/html');
    res.sendFile('./public/home.html');

    res.render('data',{data: data.getAll()})
    
   });
   
   // send plain text response
   app.get('/about', (req,res) => {

    res.end(JSON.stringify(data.getAll()));

    res.type('text/plain');
    res.send('About page');

    res.end(JSON.stringify(data.getItem(7676)));
    
   });
   
   // define 404 handler
   app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
   });