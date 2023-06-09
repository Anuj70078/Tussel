const mongoose = require('mongoose');          //write req and press enter


const dbName = 'Tussel';       //no space between name

const url = `mongodb+srv://anujch70078:1234@cluster0.xzd4lls.mongodb.net/tussle?retryWrites=true&w=majority`;

mongoose.connect(url)
//write thenc and press enter
.then((result) => {
    console.log('database connected')
})
.catch((err) => {
    console.log(err);
});

//from line 8 to 15 are in same line, dont use semicolon in line 8.



module.exports = mongoose;               //to export mongoose
