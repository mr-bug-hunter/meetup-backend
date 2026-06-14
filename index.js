const express = require("express")
const app = express()

const {dataBase} = require("./db/db.connect")

const cors = require("cors")
const corsOptions = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

const Meetup = require("./meetupSchema/schemameetup")
app.use(express.json())

dataBase()

async function createmeetup(newMeetup){
    try{
        const meet = new Meetup(newMeetup)
        const saveMeet = await meet.save()
        return saveMeet
    }catch(error){
        console.log(error)
    }
}

app.post("/meetup", async (req, res)=>{
    try{
        const saveMeet = await createmeetup(req.body)
        res.status(200).json({message: "Meetup added Successfully.", meet : saveMeet})
    }catch(error){
        console.error("Database Error", error)
        res.status(500).json({error: "Failed to add data"})
    }
})

async function readAll(){
    try{
        const readMeet = await Meetup.find()
        return readMeet
    }catch(error){
        console.log(error)
    }
}

app.get("/meetup", async (req, res)=>{
    try{
        const allData = await readAll()
        if(allData.length !== 0){
            res.json({message: "Data Added successfull", readMeet : allData})
        }else{
            res.status(404).json({error: "No data found."})
        }
        console.log(typeof allData)
    }catch(error){
        res.status(500).json({error : "Failed to fetch data."})
    }
    
})

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})