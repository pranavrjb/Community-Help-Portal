const mongoose=require('mongoose');
const helpRequestSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['open','in-progress','closed'],
        default:'open'
    },  
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    volunteers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
},{ timestamps: true });

module.exports=mongoose.model('HelpRequest',helpRequestSchema);