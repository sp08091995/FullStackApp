const passport = require('passport')

var authCbPath=null;
if(process.env.NODE_ENV === 'production'){
    authCbPath='/auth20callback'
}else{
    authCbPath='/auth/google/callback'
}

module.exports = (app) => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        authCbPath,
        passport.authenticate('google')
    )

    app.get(
        '/api/current_user',(req,res)=>{
            res.send(req.user)
        }
    )

    app.get(
        '/api/logout',(req,res)=>{
            req.logout();
            res.send(req.user)
        }
    );
}