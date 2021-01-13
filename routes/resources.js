const router = require("express").Router();
const databaseHelper = require('./helpers/databaseHelper');

const bcrypt = require('bcrypt');
const text = require("body-parser/lib/types/text");
const saltRounds = 10;


/*
router.get("/", (req, res) => {
  databaseHelper.getAllResources().then(result => {
  req.session.resourceCookie = "Resources";
  res.send(result);
  })

});
*/

// 2	GET	/resources
// Show Main page with all resources / filtered Main page	opens after successful log in or register, click on logo

router.get("/", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;
  let user_email;

  if(user_id) {

    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
    .then(result => {

      user_email = result.email;

      //res.send(result);

      console.log('result is: ', result);
      // get all resources from the user
      return databaseHelper.getAllResources2();

      // send the templateVars with all the resources inside ejs template.

    }).then(result => {

     //req.session.resourceCookie = "Resources";
     //console.log(result);
     console.log("resulT FROM getAllResources is");
     //res.send(result);
      console.log(result);
     //res.send(result);
     let templateVars = {
      user_email: user_email,
      allResources: result
     };

     res.render("main_resource-sk", templateVars);

    });
    // get all the resources from database and to res.render the resources (main) page.

    // need to display all the resources

    // need to display


  } else {

  }
  // get the user-name-value for the total
  /*
  databaseHelper.getAllResources().then(result => {
  req.session.resourceCookie = "Resources";
  res.send(result);
  })
  */

});


module.exports = router;
