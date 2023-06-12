// const mongoose = require('../connection');

const { Types } = require('mongoose');
const {Schema, model} = require('../connection');     //import connection.js file
// importing schema and model from mongoose framework


const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    org_name : String,
    org_details : String,
    role : {type : String, default: 'user'},
    createdAt: {type: Date},
    // organisation : {type : Types.ObjectId, ref: 'organisation'},
    // feedback : {type : Types.ObjectId, ref: 'feedback'}
})


module.exports = model('users', mySchema);                           //users is name of Collection






