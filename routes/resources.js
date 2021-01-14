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


  if(user_id) {

    let user_email;
    let allResources;
    let resourceDate;
    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
    .then(result => {

      user_email = result.email;

      //res.send(result);

      // console.log('result is: ', result);
      // get all resources from the user
      return databaseHelper.getAllResourcesAvgRating();

      // send the templateVars with all the resources inside ejs template.

    }).then(result => {

      // console.log("Result is: ", result);
      //let avgRating = result;
      let allResources = result;

      //resourceDate = allResources.created_at;

      // console.log("resourceDate is: ", resourceDate);
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
  // get the user-name-value for the total
  /*
  databaseHelper.getAllResources().then(result => {
  req.session.resourceCookie = "Resources";
  res.send(result);
  })
  */

});


// 1	GET	/resources/new
// Show Add New Resource page only for loggin-in user

router.get("/resources/new", (req, res) => {

  let user_email;

  // Check if user is logged-in, otherwise redirect to index page
  const user_id = req.session.user_id;

  if (user_id) {

    databaseHelper.getUserByID(user_id)
    .then(result => {

      user_email = result.email;

    const templateVars = { user_email: user_email};
    res.render("new_resource", templateVars);
    })

  } else {

    res.send("Please login or register to view requested page");
    res.redirect("/index");

  }

});


// 1	POST	/resources
// Only logged-in user can add new resource

router.post("/", (req, res) => {

  let user_email;
  const title = req.body.title;
  const category_id = req.body.category_id;
  const url = req.body.url;
  const description = req.body.description;

  const user_id = req.session.user_id;
  const owner_id = user_id;
  if (user_id) {

    databaseHelper.getUserByID(user_id)
    .then(result => {
      user_email = result.email;

      if (result) {
        // console.log('Result from getUserByID is: ', result);
        const result2 = databaseHelper.addNewResources(
                owner_id,
                category_id,
                title,
                url,
                description
                );
          return result2;

      }
      // console.log("******* RESULT IS UNDEFINED WHY????????????????");
    })
    .then(result => {
      // console.log('Result addNewResources is: ', result);
      const newResource = result;

      let templateVars = {
        user_email: user_email,
        allResources: newResource

      };

      res.render("main_resource", templateVars);

    })
  }

})


// 1  GET  /resources/:resource_id







/////////////////////////////////////////////////////////
// GET	/categories/:category_name/resources	show resources filtered by category	chosen category from pull down menu in nav bar
/////////////////////////////////////////////////////////////////////////////////////////////
/*
router.get("/categories/:category_id/resources", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;

  if(user_id) {

    let user_email;
    let allResources;
    let resourceDate;
    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
    .then(result => {

      user_email = result.email;

      //res.send(result);

      console.log('result is: ', result);
      // get all resources from the user
      return databaseHelper.getResourcesByCategory(1);

      // send the templateVars with all the resources inside ejs template.

    }).then(result => {

      console.log("Result is: ", result);
      //let avgRating = result;
      let allResources = result;

      //resourceDate = allResources.created_at;

      console.log("resourceDate is: ", resourceDate);
      let templateVars = {
        user_email: user_email,
        allResources: allResources

      };

      res.render("main_resource-sk", templateVars);

    });

  } else {
    console.log("Please login or register to view requested page");
    res.redirect("/index");
  }
  // get the user-name-value for the total
  /*
  databaseHelper.getAllResources().then(result => {
  req.session.resourceCookie = "Resources";
  res.send(result);
  })
  */








module.exports = router;
