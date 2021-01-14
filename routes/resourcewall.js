const router = require("express").Router();
const databaseHelper = require('./helpers/databaseHelper');

const bcrypt = require('bcrypt');
const saltRounds = 10;


router.get("/", (req, res) => {
  databaseHelper.getUserByID(1).then(result => {
  req.session.test = "Test";
  res.send(result.username);
  })

});




router.get("/register", (req, res) => {
  let user_id = req.session.user_id;

  if (user_id) {

    res.redirect('/resources')

  } else {

    res.render("register");
  }

});

router.post("/register", (req, res) => {

  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;

    databaseHelper.getUserByEmail(email)

    .then(result => {
      if (result) {
        res.send("Account with that email already exists");
        //ADD ERROR EJS FILE
      } else {
        return databaseHelper.addNewUser(username, email, password);
      }

    }).then(result => {
        res.redirect('/login');

    });
});



// Handles
//2	GET	/resourcewall/logout	Log user out , clear cookies, re-routes to index page.	Logout button on all pages with header.
// Function tested and Works
/* HANDLES POST REQUEST TO "/logout" - clears session cookies */
router.get("/logout", (req, res) => {

  // 1) Logout user by clearing cookies - set cookies to null.
  req.session = null;
  // 2) Redirect to index page.
  res.redirect('/index');
});













module.exports = router;
