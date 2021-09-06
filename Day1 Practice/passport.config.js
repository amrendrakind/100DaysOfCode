import { authenticate, Passport } from 'passport'
import LocalStragey from 'passport-local'
import bcrypt from 'bcrypt'
LocalStragey = LocalStragey.Strategy

function initialize(passport, getUserByEmail){
    const authenticateUser = (email, password,done)=>{
        const user=getUserByEmail(email)
        if (user==null){
            return done(null, false,{message : 'No user with email id'})
        }
        try {
            if (await bcrypt.compare(password, user.password)){
                return done(null, user)
            }else {
                return done(null, false, {message:'Incorrect Password'})
            }

        } catch (error) {
            return done(error)
        }
    }
    passport.use(new LocalStragey({usernameField: 'email'}),authenticateUser)
    password.serializeUser((user, done)=>{})
    password.deserializeUser((id, done)=>{})
}   

export default initialize
