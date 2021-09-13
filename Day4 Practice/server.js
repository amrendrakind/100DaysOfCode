const dotenv =require('dotenv').config()
const express = require('express')
const app = express()
const cors = require("cors")
const todosRoutes = require("./routes/todo.route.js")
const db = require("./models");
const PORT = process.env.SERVER_PORT || 4040

var corsOptions={ origin : "http://localhost:8080" }

app.use(cors(corsOptions))
app.use(express.json());  
app.use(express.urlencoded({extended: true}))

db.sequelize.sync();  // Database initialization

//Welcome Message

//app.get("/",(req,res)=>{res.json({message : "Welcome to Amrendra's Apps!!"})})

app.use("/todo", todosRoutes);            //For todo report by pagination

app.listen(PORT, console.log(`server is running on port ${PORT}`)) 