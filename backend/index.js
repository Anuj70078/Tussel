const express = require('express');          //method to import any package, here express is imported

//import userRouter
const userRouter = require('./routers/userRouter');
const organisationRouter = require('./routers/organisationRouter');
// const onlineRouter = require('./routers/onlineRouter');
// const offlineRouter = require('./routers/offlineRouter');
const feedbackRouter = require('./routers/feedbackRouter');
const competitionRouter = require('./routers/competitionRouter');



const cors = require('cors');         //to allow request from frontend to backend
// const feedBackModel = require('./models/feedBackModel');









//initilizing express
const app = express();                 
const port = 5000;                    //can be anything at the place of 5000







//middlewares

app.use(cors({
    origin : ['http://localhost:3000']
}));

app.use(express.json());                 //convert data from json to js
app.use('/user', userRouter);            //sending request to userRouter
app.use('/organisation', organisationRouter)
// app.use('/online', onlineRouter)
// app.use('/offline', offlineRouter)
app.use('/feedback', feedbackRouter)
app.use('/competition', competitionRouter)





//to start express server
app.listen(port, () => {console.log('express server started')});