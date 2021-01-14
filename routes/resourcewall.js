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
