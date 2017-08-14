require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, massive = require('massive')
, cors = require('cors')
, session = require('express-session')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, authConfig = require('./../config/auth-config')
, dbConfig = require('./../config/db-config')
, app = express()
, path = require('path')
, port = process.env.PORT
, appURL = process.env.REACT_APP_BASEURL;

app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret:authConfig.sessionSecret,
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());








massive(dbConfig.connectionString)
    .then(db => {
        app.set('db', db);
        app.listen(port, () => {console.log('listening on port ', port)});
    })