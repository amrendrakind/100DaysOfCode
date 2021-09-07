const dotenv = require('dotenv')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport = require('passport')
const initializePassport = require('./passport.config')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const userRouter = require('./routes/userLogin.route.js')

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

app.set('view-engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// Routes
app.use('/user', userRouter)

app.listen(5000, console.log("Server started at Port 5000"))