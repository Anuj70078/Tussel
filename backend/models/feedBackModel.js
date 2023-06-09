const { Types } = require("mongoose")
const {Schema, model} = require("../connection")

const mySchema = new Schema({
    feedback : String,
    user : {type : Types.ObjectId, ref: 'users'}
})


module.exports = model('feedback', mySchema);