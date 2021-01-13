const router = require("express").Router();
const databaseHelper = require('./helpers/databaseHelper');

const bcrypt = require('bcrypt');
const saltRounds = 10;



// /resources/
router.get("/", (req, res) => {
  databaseHelper.getAllResources().then(result => {
  req.session.resourceCookie = "Resources";
  res.send(result);
  })

});


/////////////////////////////////////////////////////////
// GET	/categories/:category_name/resources	show resources filtered by category	chosen category from pull down menu in nav bar
/////////////////////////////////////////////////////////////////////////////////////////////
router.get("/:a/:b/:c", (req,res) => {

  console.log(req.params);
  res.send(req.params);
});



router.get("/:category_id/resources", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;

  if(user_id) {

    let category_id = req.params.category_id;

    let user_email;
    let allResources;
    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
    .then(result => {

      user_email = result.email;

      //res.send(result);

      console.log('result is: ', result);
      // get all resources from the user
      return databaseHelper.getResourcesByCategory(category_id);

      // send the templateVars with all the resources inside ejs template.

    }).then(result => {

      console.log("Result is: ", result);
      //let avgRating = result;
      let allResources = result;

      //resourceDate = allResources.created_at;

      let templateVars = {
        user_email: user_email,
        allResources: allResources

      };

      res.render("specific_category_resource", templateVars);

    });

  } else {
    console.log("Please login or register to view requested page");
    res.redirect("/index");
  }

});





module.exports = router;
