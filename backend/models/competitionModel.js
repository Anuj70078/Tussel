const { Types } = require('mongoose');
const {Schema, model} = require('../connection')

const mySchema = new Schema({
    mode : String,
    date : Date,
    description : String,
    rules : String,
    rewards : String,
    venue : String,
    requirement : String,
    user : {type : Types.ObjectId, ref: 'users'}
})

module.exports = model('competition', mySchema);