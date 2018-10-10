const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
    callbackURL:'/auth/google/redirect',
    clientID:'90808389547-kcb5e6sipidbn7b3kcvsibj4nsg20noc.apps.googleusercontent.com',
    clientSecret:'xW0y6jK5lKVBLc4Kf1GubpW8'
},()=>{

    })
);