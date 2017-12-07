require('dotenv').config();
const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , cors = require('cors')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , app = express()
    , path = require('path')
    , port = process.env.PORT;

//-------------------------CONTROLLERS--------------------------//

const userCtrl = require('./controllers/user-controller');

//--------------------------APP SETUP---------------------------//

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use( express.static( `${__dirname}/../build` ) );

//--------------------------AUTH0-------------------------------//

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL:  process.env.AUTH_CALLBACK
},  function(accessToken, refreshToken, extraParams, profile, done) {
        let db = app.get('db');
        db.queries.user.getUserByAuthId([profile.id])
        .then(user => {
            if(!user[0]) {
            console.log('step 1')
                let db = app.get('db');
                db.queries.user.createUserViaAuth([
                    profile.id,
                    profile.displayName,
                    profile.emails[0].value,
                    profile.picture
                ])
                .then(user => {
                    let userCurrent = user[0]
                    return done(null, userCurrent);
                })
                .catch(err => {
                    console.log(err);
                })
            }
            else {
                let userCurrent = user[0];
                return done(null, userCurrent);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
));



// const redirectMiddleware = (req, res, next) => {
//   if (req.query.source) {
//     loginRoot = req.query.source;
//     return next();
//   } else {
//     return {successRedirect: `${appURL}/${loginRoot}`}
//   }
// }


passport.serializeUser((userA, done) => {
    console.log('serializing', userA);
    let userB = userA;
    done(null, userB);
});

passport.deserializeUser((userB, done) => {
    console.log('deserialized')
    let userC = userB;
    done(null, userC);
});

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback',
    passport.authenticate('auth0', {successRedirect: `${process.env.REACT_APP_BASEURL}/`}),
    (req, res) => {send(req.user)
});

//----------------------REACT-APP ENDPOINTS----------------------//

app.get('/api/user', userCtrl.getCurrentUser);
app.put('/api/user/:id', userCtrl.editUser);
app.get('/api/user/:id', userCtrl.getUserById);



//----------------------------DB/LISTEN--------------------------//

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db);
        app.listen(port, () => {console.log('listening on port ', port)});
    })
