import express from 'express'
const app=express()
app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs',{user:'Amrendra K'})
})



app.listen(4000,console.log("Server started"))