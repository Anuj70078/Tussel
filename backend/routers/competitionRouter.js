const { Router } = require('express');
const Model = require('../models/competitionModel')

const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()      //saving data in database

        .then((result) => {
            res.json(result)   //converting result into json
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });

    // res.send('response from /add in user router')
});

router.get('/getall', (req, res) => {
    Model.find({})
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/getbyid/:CompId', (req, res) => {
    Model.findById(req.params.CompId)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.delete('/delete/:CompId', (req, res) => {
    Model.findByIdAndDelete(req.params.CompId)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/getbyuser/:userid', (req, res) => {
    Model.find({ user: req.params.userid })
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.put('/updateComp_data/:CompId', (req, res) => {
    Model.findByIdAndUpdate(req.params.CompId, req.body)
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})


module.exports = router;