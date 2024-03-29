// BRANCHES:
// Git branches are per feature
// Going forward, have two branches (for the "features" left)
// Edit, CSS, maybe GA's MVP for GA?

// load the env consts
require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
// session middleware
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

const MongoStore = require('connect-mongo');
const indexRouter = require("./routes/index");
const tripsRouter = require("./routes/trips");
const usersRouter = require("./routes/users");
const excursionsRouter = require("./routes/excursions");

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
require('./config/database');
// configure Passport
require('./config/passport');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// mount the session middleware
app.use(session({
  store: MongoStore.create({
    mongoUrl: process.env.DATABASE_URL
  }),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


// Add this middleware BELOW passport middleware
// moved to bouncer controller
// app.use(function (req, res, next) {
//   res.locals.user = req.user; 
//   // assigning a property to res.locals, makes that said property (user) available in every single ejs view
//   next();
// });

// CHECKING MASYER AUTH CONTROLLER
const assignLocals = require('./controllers/locals.js')
app.use(assignLocals.user)
// app.use("/trips/:tripID/excursions", assignLocals.urlIDs)
// app.use(assignLocals.isLoggedIn)

// printing local variables before moving onto routers
app.use(function (req,res,next){
  console.log('SERVER PRINTING LOCALS')
  console.log(res.locals)
  next();
})

// mounting routers to call the proper controllers at a base path
app.use("/trips/:tripID/excursions", assignLocals.urlIDs, excursionsRouter);
app.use("/trips", tripsRouter);
app.use("/users", usersRouter);
app.use("/", indexRouter);



app.use(express.static(path.join(__dirname, 'public')));

// invalid request, send 404 page
app.use(function(req, res) {
  res.status(404).send('Cant find that!');
});

module.exports = app;