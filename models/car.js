import mongoose from 'mongoose';
const {Schema} = mongoose;
import {connectionString} from '../lib/credentials.js';
 


// define donnections 
 
mongoose.connect(connectionString, {
    dbName: 'jsproject', // replace 'DBNAME' with data name 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// connect the app 
mongoose.connection.on('open', () => {
console.log('Mongoose connected.');
});

// here we define the Schema 
// define data model as JSON key/value pairs
// values indicate the data type of each key
const carsSchema = new Schema({
 model: { type: String, required: true },
 year: Number,
 vin: Number,
type: String,

});
// here we export the Schema like me will export car instead of cars//
 
export const  Cars = mongoose.model('Car', carsSchema);
 
