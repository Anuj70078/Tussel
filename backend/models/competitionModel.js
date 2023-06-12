const { Types } = require('mongoose');
const {Schema, model} = require('../connection')

const mySchema = new Schema({
    mode : String,
    date : Date,
    description : String,
    rules : String,
    rewards : String,
    venue : String,
    participants: Number,
    requirement : String,
    user : {type : Types.ObjectId, ref: 'users'},
    createdAt: {type: Date},
    paymentStatus : {type : String, default: 'paid'},
    paperMode : {type : String, default: 'file'},
    paper : {type : String, default: ''},
})

module.exports = model('competition', mySchema);