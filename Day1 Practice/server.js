import express from 'express'
import bcrypt from 'bcrypt'
const app=express()

const users=[]
app.set('view-engine','ejs')
app.use(express.urlencoded({encoded:false}))


app.get('/',(req,res)=>{
    res.render('index.ejs',{user:'Amrendra K'})
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.get('/register',(req,res)=>{
    res.render('register.ejs')
})

app.post('/register', async(req,res)=>{
    
    try {
        
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        users.push({
            id: Date.now().toString(),
            name : req.body.name,
            email : req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')

    } catch (error) {
        res.redirect('/register')
    }
//    console.log(users)
})

app.post('/login',(req,res)=>{

})


app.listen(4000,console.log("Server started"))