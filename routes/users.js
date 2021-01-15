/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */
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

router.get("/:user_id/resources", (req, res) => {

  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;
  // let user_id = 2;

  if(user_id) {

    let user_email;
    let allUserResources;
    let allUserLikedResources;

    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
    .then(result => {


      user_email = result.email;

      return databaseHelper.getResourceReviewsByUserID(user_id);


    }).then(result => {

      console.log("result from getResourceReviewsByOwnerID is : ", result);
      allUserLikedResources = result;

      return databaseHelper.getUserResourcesByUserID(user_id);

    }).then(result => {
      console.log("RESULT FROM FUNCTION 2: getUserResourcesByUserID is:", result);
      allUserResources = result;

      let templateVars = {
        user_email: user_email,
        allUserResources: allUserResources,
        allUserLikedResources: allUserLikedResources,
        userId: user_id

      };
      res.render("specific_user_resource", templateVars);
    });

  } else {
    console.log("Please login or register to view requested page");
    res.redirect("/index");
  }


});


  // getUserResourcesByUserID ( )

  // getResourceReviewsByOwnerID (user_id)



  // GET	/users/:user_id/resources	Show user's own resources




  module.exports = router;




