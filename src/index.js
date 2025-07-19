const express = require('express');
const bodyParser= require('body-parser');

const { PORT } = require('./config/serverConfig');


const setupAndstartServer = ()=>{
    const APP = express();
    APP.use(bodyParser.json());
    APP.use(bodyParser.urlencoded({extended:true}))

    APP.listen(PORT, () => {
        console.log(`Server started on port : ${PORT}`);
    });
}

setupAndstartServer();