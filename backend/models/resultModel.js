const { Types } = require('mongoose');
const {Schema, model} = require('../connection');


const mySchema = new Schema({
    competition : {type : Types.ObjectId, ref : 'competition'},
    data : Object,
    createdAt : Date,

})


module.exports = model('result', mySchema);






