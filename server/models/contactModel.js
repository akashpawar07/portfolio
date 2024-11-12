const mongoose = require('mongoose')

const contactModel = new mongoose.Schema({
    userName :{
        type : String,
        uppercase: true
    },
    userEmail :{
        type : String,
        lowercase: true
    },
    userMessages:{
        type: String,
        lowercase : true
    }

},{timestamps:true})

const contactModels = mongoose.model('UserDetails', contactModel)
module.exports = contactModels

// this is test