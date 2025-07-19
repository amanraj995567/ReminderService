const { createTask } = require('node-cron');
const TicketService = require('../services/ticket-service');



const create = async (req,res)=>{
    try {

        const ticket = await TicketService.createNotification(req.body);
        return res.status(201).json({
             success:true,
             data: ticket,
             err:{},
             message:'Successfully registered an email remainder'
        });
        
    } catch (error) {
         console.log(error);
         return res.status(500).json({
             success: false,
             err: error,
             message:'Unable to  registered an email remainder'
        });   
    }
}




module.exports = {
    create
}