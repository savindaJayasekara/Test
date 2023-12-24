const express = requre('express');
const controller = require('./controller/controller')
const app = express();

app.use(express.json());

console.log('Hello World !');

app.put('/deleteuser',(req,res)=>{
    controller.deleteUser(req,res);
});

module.exports = app;
