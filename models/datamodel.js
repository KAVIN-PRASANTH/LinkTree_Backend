const mongoose = require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    },
})
const Data=mongoose.model("userlinks",schema);
module.exports=Data;