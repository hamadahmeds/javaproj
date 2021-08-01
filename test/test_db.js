'use static'

// import {cars} from "./models/car.js";
import{ Cars } from "../models/car.js"
// find all documets 
Cars.find({}, (err, result) => {
    if(err) {
        console.log(err);

        }else{
        console.log(result);
        }
        return

    });
    console.log("step 1")
    Cars.countDocuments((err, result) => {
        console.log("step 2")
        console.log(result + " db entries");
    });
    console.log("step 3");