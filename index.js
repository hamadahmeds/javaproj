"use strict";

import express from 'express';
import { Cars } from "./models/car.js";

// import express, { json } from "express";

// import express , { response } from "express";

import cors from 'cors';
import handlebars from "express-handlebars";

// import { model } from "mongoose";




const app = express(); // instance of express applicatoin
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use(express.urlencoded()); //Parse URL-encoded bodiesarse URL-encoded bodies/ use to submit js objects
app.use(express.json()); /// use to submit info as a  js objects

app.use(cors()); // set Access-Control-Allow-Origin header for api route
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route


app.engine('hbs', handlebars({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');



app.get('/', (req, res, next) => {
  Cars.find({}).lean().then((car) => {
      // respond to browser only after db query completes
      // res.render("home", { car });
      res.render('home', {car: JSON.stringify(car)});
    })
    .catch((err) => next(err));
});

//    // send plain text response//

app.get('/about', (req, res) => {
  res.type("text/plain");
  res.send("about page ");
  // res.send(JSON.stringify(car.getAll()));
});

app.get('/detail', (req, res, next) => {
  // db query can use request parameters
  Cars.findOne({ model: req.query.model }).lean().then((car) => {
    console.log(car);
    res.render('detail', { result: car });
    })
    .catch((err) => next(err));
});

app.post('/detail', (req, res, next) => {
  Cars.findOne({ model: req.body.model }).lean().then((car) => {
      res.render('detail', { result: car });
    })
    .catch((err) => next(err));
});

app.get('/delete', (req, res) => {
  Cars.remove({ model: req.query.model }, (err, result) => {
    if (err) return next(err);
    let deleted = result.result.n !== 0; // n will be 0 if no docs deleted
    Cars.count((err, total) => {
      res.type("text/plain");
      res.render("delete", {
        model: req.query.model,
        deleted: result.result.n !== 0,
        total: total,
      });
    });
  });
});

// API routes ....
// this api  works and return all the data .. 
app.get('/api/cars', (_req, res) => {
  Cars.find({}).lean().then((car) => {
    res.json(car);
    })
    .catch((err) => next(err));
});

// retrun just one item , to chekc --> /api/cars/camry or altima ... 
app.get('/api/car/:model', (req, res, next) => {
  // db query can use request parameters
  Cars.findOne({ model: req.params.model }).lean().then((car) => {
    console.log(car);
    res.json(car);
    })
    .catch((err) => next(err));
});

// to add or update one item .. 
app.post('/api/cars', (req, res, next) => {
  // db query can use request parameters
  Cars.updateOne({'model': req.body.model }, req.body , {upsert:true}, (err, result) => {
    if (err) return next(err);
    console.log(result);
    // other code here
  });
});



app.post('/api/cars/add', (req, res, next) => {

console.log(req.body)

  // Cars.updateOne({'model': req.body.model }, req.body , {upsert:true}, (err, result) => {
  //   if (err) return next(err);
  //   console.log(result);
    // other code here
  // });
  res.json({"massage" : "all  good "})
});


app.use((_req, res) => {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
  console.log("Server 3000 started ...... ");
});
