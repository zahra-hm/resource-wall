// load .env data into process.env
require('dotenv').config();

// Web server config
const database = require('./routes/database');

const path = require('path');

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require('morgan');
const cookieSession = require('cookie-session');


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.use(cookieSession({
  name: 'session',
  keys: ['b6d0e7eb-8c4b-4ae4-8460-fd3a08733dcb', '1fb2d767-ffbf-41a6-98dd-86ac2da9392e']
  }));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));


const userRouter = require('./routes/users');
const resourceRouter = require('./routes/resources');
const resourceWallRouter = require('./routes/resourcewall');
const categoryRouter = require('./routes/categories');
const profileRouter = require('./routes/profile');

app.use("/users", userRouter);
app.use("/resources", resourceRouter);
app.use("/resourcewall", resourceWallRouter);
app.use("/categories", categoryRouter);
app.use("/profile", profileRouter);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
// const usersRoutes = require("./routes/users");


// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// app.use("/api/users", usersRoutes(db));
// app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/index", (req, res) => {
  res.send("I'm app.get /");
});

// app.get("/users/", (req, res) => {
//   res.send("I'm app.get /users/");
// });

// app.get("/register", (req, res) => {
//   res.render("register");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.post("/register", (req, res) => {
//   // check if user exists (for now use seed data i.e user exists.)
//   // if user exists --> error-message (res.send("user already exists with that email")).


//   // extract submitted user info from register form submitted.
//   let newUserInfo = req.body;

//   /*
//     { username: 'samk_2020',
//       userEmail: 'helloworld@gmail.com',
//       password: 'heloowrold' }
//   */

//   // post to database first (postNewUser --> post data into database)
//    //addNewUser(newUserInfo).catch(err => console.log(err));

//   // Logic to make sure user is registered, if registed get the session cookies value for user_id.

//   // If not registered

//   // require logged in user's info, and also all resources (entire table).
//   // const userInfo = getUserData();


//   // from database require new_user info
//   // from
//   console.log(req.body);

//   res.redirect("/resources")
//   /*
//   db.query(`SELECT * FROM users;`)
//     .then(data => {
//       const users = data.rows;
//       res.json({ users });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
//   */
// });

// app.get("/profile/:user_id", (req, res) => {
//   res.render("user_profile");
// });

// app.get("/resources/:resource_id", (req, res) => {
//   res.render("specific_resource");
// });

// app.get("/resources/categories/:category_name", (req, res) => {
//   res.render("specific_category_resource");
// });

// app.get("/resources", (req, res) => {
//   res.render("main_resource");
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

