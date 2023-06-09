const { Types } = require('mongoose');
const {Schema, model} = require('../connection');


const mySchema = new Schema({
    competition : {type : Types.ObjectId, ref : 'competition'},
    createdAt : Date
})


module.exports = model('users', mySchema);






