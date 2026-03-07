const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://kp123:Krishna143@cluster0.tdqnxhl.mongodb.net/Day8UserLab1?appName=Cluster0')
    .then(() => console.log("Connect with MongoDB"))
    .catch(err => console.log("Coudn't connect with MongoDB"))

app.get("/", (req, res) => {
    res.send("Server is Running");
});

const detailUser = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },
    email:{
        type:String,
        lowercase:true,
        unique:true
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        minlength:[1,"Age must be atleast 2 character"]
    },
    gender:{
        type:String,
        required:[true]
    }
});

const getData = mongoose.model('UserDetails', detailUser);

app.post("/addData", async (req, res) => {
    try {
        const user = await getData.create(req.body);
        res.status(200).json(user);
    }
    catch (err) {
        return res.status(404).json({ message: "Data not Added" });
    }
});

app.get("/getData", async (req, res) => {
    try {
        const getUser = await getData.find();
        res.status(200).json(getUser);
    }
    catch {
        return res.status(404).json({ message: "Data not Found" });
    }
});

app.put("/updateData/:id",async(req,res)=>{
    const userId = req.params.id;
    try{
        const updateData = await getData.findByIdAndUpdate(userId,req.body,{returnDocument:"after"});
        res.status(200).json(updateData);
    }
    catch{
        return res.status(404).json({message :"Data not updated"});
    }
});

app.patch("/updateField/:id",async(req,res)=>{
    const userId = req.params.id;
    try{
        const updateField = await getData.findByIdAndUpdate(userId,req.body,{returnDocument:"after"});
        res.status(200).json(updateField);
    }
    catch{
        return res.status(404).json({message :"Data not updated"});
    }
});

app.delete("/deleteData/:id",async(req,res)=>{
    const userId = req.params.id;
    try{
        const dataDelete = await getData.findByIdAndDelete(userId);
        res.status(200).json(dataDelete);
    }
    catch{
        return res.status(404).json({message :"Data not Deleted"});
    }
});

app.listen(5002, () => {
    console.log("server is ruuning on PORT 5002");
});