const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")
const PORT = process.env.SERVER_PORT || 8080

var corsOptions={ origin : "http://localhost:8081" }

app.use(cors(corsOptions))
app.use(express.json());  
app.use(express.urlencoded({extended: true}))

//Welcome Message

app.get("/",(req,res)=>{res.json({message : "Welcome to Amrendra's World!!"})})


//app.use("/todo", todosRoutes);            //For todo report by pagination

app.listen(PORT, console.log(`server is running on port ${PORT}`)) 