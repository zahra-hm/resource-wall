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



//1 GET /resourcewall/login
// Email for testing: michaelgray@mail.com
// Password for testing: $2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.

router.get("/login", (req, res) => {


  const user_id = req.session.user_id;

  if (user_id) {

    res.redirect("/resources");

  } else {

    const templateVars = {};
    res.render("login", templateVars);

  }

});



//1 POST /resourcewall/login , Check username and password, only allow valid user to login

router.post("/login", (req, res) => {

  const user_email = req.body.email;
  const password = req.body.password;

  databaseHelper.getUserByEmail(user_email)
    .then(result => {

      if (result && result.password === password) {

        req.session.user_id = result.id;
        res.redirect("/resources");

      } else {

        res.send("Your email or password is invalid");

      }
    })

    .catch(error => console.log(error));

});



  // if (password === user.password) {
  //   res.redirect("/resources");
  // }

// // Check if user has cookie id
  // if (user_id) {

  //   let user_email;

  //   databaseHelper.getUserByID(user_id)
  //   .then(result => {

  //   // get user email from the users table
  //     user_email = result.email;

  //     console.log("result is: ", result);
  //     console.log("user_email is: ", user_email);

  //     if (user_email) {

  //       res.redirect("/resources");

  //     } else {

  //       const templateVars = {
  //         user_email: user_email
  //       };

  //       res.render("login", templateVars);

  //     }
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }


// });

// Check if user is logged-in, re-route to Main Resources page

// Else




module.exports = router;

