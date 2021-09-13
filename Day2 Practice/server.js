const dotenv = require('dotenv')
const express = require('express')
const app = express()
const Connct_Mongo_DB = require('./config/dbConfig.js')
const todosReportRoutes = require('./routes/todo.pagination.route.js')
const bodyParser = require('body-parser')
const cors = require('cors');

// Initialisation of Mongodb connection
Connct_Mongo_DB();

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}
const PORT = process.env.SERVER_PORT || 4040

app.use(bodyParser.json());
app.use(express.json());  
app.use(cors());

//Routes

app.use("/todoreport", todosReportRoutes);            //For todo report by pagination

app.listen(PORT, console.log(`server is running on port ${PORT}`))