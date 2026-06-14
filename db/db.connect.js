const dns = require("dns")
dns.setServers(["8.8.8.8", "8.8.4.4"])


const mongoose = require("mongoose")
require("dotenv").config()

const mongoUri = process.env.MONGODB

const dataBase = async ()=>{
    await mongoose
    .connect(mongoUri)
    .then(()=>{
        console.log("Connected to Database Successfully.")
    }).catch((error)=> console.log("Error in connecting to Database."))
}

module.exports = {dataBase}