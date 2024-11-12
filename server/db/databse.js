const mongoose = require('mongoose')

//
const db_connection =  mongoose.connect(process.env.DB_CONNECTION)
    .then(()=>{
        console.log("Database connected succssfully ✅ ")
    }).catch((err)=>{
        console.error("Somethig went wrong while connecting DB ❌ : ", err)
    })

module.exports = db_connection;