const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://annet-paul:annet123@ac-rrnjxoo-shard-00-00.bcqym4j.mongodb.net:27017,ac-rrnjxoo-shard-00-01.bcqym4j.mongodb.net:27017,ac-rrnjxoo-shard-00-02.bcqym4j.mongodb.net:27017/nssdb?ssl=true&replicaSet=atlas-stpu0i-shard-0&authSource=admin&appName=Cluster0").then(
    () => {
        console.log("mongodb connected")
    }
).catch(
    (error) => {
        console.log(error)
    }
)


const Vol=mongoose.model("Vols",new mongoose.Schema(
    {
        volId: String,
        fullName: String,
        email: String,
        phone: String,
        dob: String,
        gender: String,
        bloodGrp: String,
        dept: String,
        year: String,
        campName: String,
        hours: String,
        address: String,
        unitNumber: String
    }
))

app.get("/view-vol",async(req,res)=> {
    const vols=await Vol.find()
    res.json(vols);
});

app.post("/add-vol",async (req,res) => {
    await Vol.create(req.body)
    res.json({"status":"success"});
});

app.listen(3000, ()=> {
    console.log("server started")
});