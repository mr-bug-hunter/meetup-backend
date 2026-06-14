const mongoose = require("mongoose")

const meetupSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    hostedBy: {
        type: String,
    },
    img:{
        type: String,
    },
    details: {
        type: String,
    },
    additionalInformation: [{
        type: String,
    }],
    eventTags: [{
        type: String,
    }],
    timing :{
        type: String,
    },
    marketingAddress:{
        type: String,
    },
    price:{
        type: Number,
    },
    eventType:{
        type: String,
    },
    speakers: [
        {
            name:{
                type: String,
            },
            image:{
                type: String,
            },
        },
    ],
    
})

const meetup = mongoose.model("meetup", meetupSchema)

module.exports = meetup