const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors")
const PORT = process.env.SERVER_PORT || 4040

app.use(express.json());  


//app.use("/todo", todosRoutes);            //For todo report by pagination

app.listen(PORT, console.log(`server is running on port ${PORT}`)) 