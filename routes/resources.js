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
// Show Main page with all resources /	opens after successful log in or register, click on logo

router.get("/", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;


  if(user_id) {

    let user_email;
    let allResources;

    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
    .then(result => {

      user_email = result.email;

      //res.send(result);

      console.log('result is: ', result);
      // get all resources from the user
      return databaseHelper.getAllResourcesAvgRating();

      // send the templateVars with all the resources inside ejs template.

    }).then(result => {

      console.log("Result is: ", result);
      //let avgRating = result;
      allResources = result;

      //resourceDate = allResources.created_at;


      let templateVars = {
        user_email: user_email,
        allResources: allResources

      };

      res.render("main_resource", templateVars);

    });

  } else {
    console.log("Please login or register to view requested page");
    res.redirect("/index");
  }


});

/*
router.get("/resources/search", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;

  if(user_id) {

    let searchInput = req.body.
    let user_email;
    let allResources;

    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
    .then(result => {

      user_email = result.email;

      //res.send(result);

      console.log('result is: ', result);
      // get all resources from the user
      return databaseHelper.getAllResourcesAvgRating();

      // send the templateVars with all the resources inside ejs template.

    }).then(result => {

      console.log("Result is: ", result);
      //let avgRating = result;
      allResources = result;

      //resourceDate = allResources.created_at;


      let templateVars = {
        user_email: user_email,
        allResources: allResources

      };

      res.render("main_resource", templateVars);

    });

  } else {
    res.send("Please login or register to view requested page");
    console.log("Please login or register to view requested page");
    //res.redirect("/index");
  }


});

*/





module.exports = router;
