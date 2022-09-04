const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Student = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
   
});

//Export the model
const Students = mongoose.model('Student', Student);

module.exports = Students;