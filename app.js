const express = require('express');
const app = express();
const userModel = require('./user');

app.use(express.json());

app.post('/user', async (req, res, next) => {
    //fetch info from request body.
    try {

        console.log('req.body', req.body)
        let userDetail = req.body;
        let response = await userModel.insertMany([userDetail]);
        res.json(response);
        
    }
    catch(error) {
        res.json(error)
    }
})

app.get('/user', async (req, res) => {
    try {
        
        let response = await userModel.find({});
        res.json(response);

    } catch (error) {
        res.status(500).json(error);
    }
})

app.get('/user/:userId', async (req, res) => {

    let userId = req.params.userId;
    let response = await userModel.find({_id: userId});
    res.json(response);
});

app.put('/user/:userId', async (req, res) => {
    
    let userId = req.params.userId;
    let body = req.body;
    console.log(body, userId);
    let response = await userModel.updateOne({_id: userId}, {$set: body});
    res.json(response);
});

app.delete('/user/:userId', async (req, res) => {

    let userId = req.params.userId;
    let response = await userModel.deleteOne({_id: userId});
    res.json(response);
})



module.exports = app;