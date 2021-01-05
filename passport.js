const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('./models/User')

passport.use(new LocalStrategy((username,password,done)=>{
    User.findOne({username}, (err,user)=>{
        //something went wrong with database
        if(err)
            return done(err)
        // if no usr eexist
        if(!user)
            return done(null,false)
        // check if password is correct
        user.comparePassword(password,done)
    })
}))