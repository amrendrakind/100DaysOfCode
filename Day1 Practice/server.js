import express from 'express'
const app=express()

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.render('index.ejs',{user:'Amrendra K'})
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.get('/register',(req,res)=>{
    res.render('register.ejs')
})

app.post('/register',(req,res)=>{
    res.render('register.ejs')
})



app.listen(4000,console.log("Server started"))