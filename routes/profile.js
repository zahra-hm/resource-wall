const router = require("express").Router();
const databaseHelper = require('./helpers/databaseHelper');

const bcrypt = require('bcrypt');
const saltRounds = 10;



// /resources/
// router.get("/", (req, res) => {
//   databaseHelper.getAllResources().then(result => {
//   req.session.resourceCookie = "Resources";
//   res.send(result);
//   })

// });

router.get("/user", (req, res) => {
  // const user_id = req.params.user_id;
  const userID = req.session.user_id;
  // let username = req.body.username;

  if (userID) {
    // const user_id = req.params.user_id;

    databaseHelper.getUserByID(userID)
    .then(result => {
      console.log("RESULT IS: ")
      console.log(result);
      let user_email = result.email;
      let username = result.username;

      let templateVars = {
        user_id: userID, user_email: user_email, username: username
      };
      res.render("user_profile", templateVars)

    })

  } else {
    res.send('Must be logged in to view page!!!');
    // res.redirect('/index')
  }
});

router.post("/:user", (req, res) => {

  let username = req.body.username;
  let user_id = req.params.user;

    databaseHelper.getUserByID(user_id)
    .then(result => {
      return databaseHelper.updateUserName(result.id, username)
    })
    .then(result => {
      res.redirect('/profile/user');
    })

});

module.exports = router;
