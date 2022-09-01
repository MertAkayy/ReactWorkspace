const mongoose = require('mongoose');

let PistolSchema= new mongoose.Schema({
Pistol: {type:String ,required:true,unique:false},
Producer:{type:String ,required:false,unique:false},
Bullet_type:{type:String ,required:true,unique:false},
Country:{type:String ,required:false,unique:false},
Year:{type:String ,required:false,unique:false},
})

module.exports=mongoose.model('pistolsColection',PistolSchema);