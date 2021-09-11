const express = require('express')
const app = express()
const PORT = process.env.SERVER_PORT || 4040

app.use(express.json());  

//Routes

//app.use("/todo", todosRoutes);            //For todo report by pagination

app.listen(PORT, console.log(`server is running on port ${PORT}`)) 