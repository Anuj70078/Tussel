const { Types } = require('mongoose');
const {Schema, model} = require('../connection');


const mySchema = new Schema({
    competition : {type : Types.ObjectId, ref : 'competition'},
    img: String,
    name : String,
    createdAt : Date,

})


module.exports = model('result', mySchema);






