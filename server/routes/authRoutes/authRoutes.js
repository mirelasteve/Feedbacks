const passport = require('passport');

module.exports = (app)=>{
    app.get('/auth/google', passport.authenticate('google',{
        scope:['profile','email']
        })
    )

    app.get('/auth/google/callback',
    passport.authenticate('google'),
    (req,res)=>{
        res.redirect('/surveys')
    });




    app.get('/auth/linkedin',passport.authenticate('linkedin',{
        scope: ['r_liteprofile', 'r_emailaddress']
        }));

    app.get('/auth/linkedin/callback',passport.authenticate('linkedin'))

    
    
    app.get('/auth/github',passport.authenticate('github'));

    app.get('/auth/github/callback',
     passport.authenticate('github'),
     (req,res)=>{
         res.redirect('/surveys')
     }
    );
    
    
    app.get('/api/current_user',(req,res)=>{
        
        res.send(req.user)
    });

    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect('/');
    });

}
