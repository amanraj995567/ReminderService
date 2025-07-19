const express = require('express');
const bodyParser= require('body-parser');

const { PORT } = require('./config/serverConfig');

//const {sendBasicEmail} = require('./services/email-service');

const jobs = require('./utils/job');
const TicketController = require('./controllers/ticket-controllers');

const setupAndstartServer = ()=>{
    const APP = express();
    APP.use(bodyParser.json());
    APP.use(bodyParser.urlencoded({extended:true}))

    APP.post('/api/v1/tickets' , TicketController.create);

    APP.listen(PORT, () => {
        console.log(`Server started on port : ${PORT}`);
        jobs();
    });

    // sendBasicEmail(
    //     'support@admin.com',
    //     'amanrajhumai@gmail.com',
    //     'This is a testing email',
    //     'Hey how are you ujjwal singh'
    // );
    
    
}

setupAndstartServer();