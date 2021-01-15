const router = require("express").Router();
const databaseHelper = require('./helpers/databaseHelper');

const bcrypt = require('bcrypt');
const text = require("body-parser/lib/types/text");
const saltRounds = 10;


// 2	GET	/resources
// Show Main page with all resources / filtered Main page	opens after successful log in or register, click on logo

router.get("/", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;
  // let user_id = 2;

  if (user_id) {

    let user_email;
    let allResources;

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
        //res.send(result);
        // console.log("Result is: ", result);
        //let avgRating = result;
        allResources = result;

        //resourceDate = allResources.created_at;

        // console.log("resourceDate is: ", resourceDate);

        let templateVars = {
          user_email: user_email,
          allResources: allResources,
          userId: user_id

        };

        res.render("main_resource", templateVars);

      });

  } else {
    console.log("Please login or register to view requested page");
    res.redirect("/index");
  }


});


router.post("/search", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;

  if (user_id) {

    let searchInput = req.body.searchBar;
    let user_email;
    let allResources;
    console.log("SEARCH INPUT IS: ", searchInput);
    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
    databaseHelper.getUserByID(user_id)
      .then(result => {

        user_email = result.email;

        //res.send(result);

        //console.log('result is: ', result);
        // get all resources from the user
        return databaseHelper.getAllResourcesMatchingSearch(searchInput);

        // send the templateVars with all the resources inside ejs template.

      }).then(result => {

        console.log("Result is: ", result);
        //let avgRating = result;
        allResources = result;

        //resourceDate = allResources.created_at;


        let templateVars = {
          user_email: user_email,
          allResources: allResources,
          userId: user_id

        };

        res.render("main_resource", templateVars);

      });
  } else {
    res.send("Please login or register to view requested page");
    console.log("Please login or register to view requested page");
  }

});


// GET	  /resources/new
// Show Add New Resource page only for loggin-in user

router.get("/new", (req, res) => {

  let user_email;

  // Check if user is logged-in, otherwise redirect to index page
  const user_id = req.session.user_id;

  if (user_id) {

    databaseHelper.getUserByID(user_id)
      .then(result => {

        user_email = result.email;

        const templateVars = {
          user_email: user_email,
          userId: user_id

        };
        res.render("new_resource", templateVars);
      });

  } else {

    res.send("Please login or register to view requested page");
    res.redirect("/index");

  }

});


// POST	  /resources
// Only logged-in user can add new resource

router.post("/", (req, res) => {


  const title = req.body.title;
  const category_id = req.body.category_id;
  const url = req.body.url;
  const description = req.body.description;

  const user_id = req.session.user_id;
  const owner_id = user_id;
  if (user_id) {

    databaseHelper.addNewResources(
      owner_id,
      category_id,
      title,
      url,
      description
    ).then(result => {

      res.redirect("/resources");
    });
  } else {

    res.send("Please login or register to view requested page");
  }
});


// GET  /resources/:resource_id
// Show specific resource page when user selects a specific resource

router.get("/:resource_id", (req, res) => {

  let user_email;
  let resource_id = req.params.resource_id;
  let resource_info;
  let comments_info;
  let likeState;

  // Check if user is logged-in, otherwise redirect to index page
  const user_id = req.session.user_id;
  // console.log("********** user_id = ", user_id);

  if (user_id) {

    databaseHelper.getUserByID(user_id)
      .then(result => {
        user_email = result.email;

        return databaseHelper.getAllInfoSpecificResource(resource_id);

      })
      .then(result => {
        // console.log('Result for getAllInfoSpecificResource ', result);

        resource_info = result;
        return databaseHelper.getCommentsForSpecificResource(resource_id);

      })
      .then(result => {

        comments_info = result;
        // console.log('Result for getCommentsForSpecificResource ', result);

        return databaseHelper.getIsLikeValue(user_id, resource_id);

      })
      .then(result => {
        // console.log('Result for getIsLikeValue ', result);


        if (result.length === 0) {

          likeState = false;

        } else {

          likeState = result[0].isLike;

        }

        console.log("Result for likeState is ", likeState);

        const templateVars = {
          user_email,
          resource_id,
          resource_info,
          comments_info,
          likeState,
          userId: user_id
        }

        res.render("specific_resource", templateVars);

      });

  } else {

    res.send("Please login or register to view requested page");

  }
});



router.post("/rate", (req, res) => {

  let ratingInput = req.body.rating;
  resource_id = req.params.resource_id;
  let user_email;
  let resource_id;
  let ratingValue;

  console.log("resource_id is: ", resource_id);
  console.log("RATE INPUT IS: ", ratingInput);

  // check if user is logged in and if yes, otherwise redirect to index page with message.
  const user_id = req.session.user_id;

  //
  if (user_id) {

    databaseHelper.getUserByID(user_id)
      .then(result => {

        res.send(result);
        console.log("******* Result for getUserByID is ", result);

        user_email = result.email;


        // return databaseHelper.addNewReviewIsRating(user_id, resource_id, ratingValur)
        // return databaseHelper.getSpecificResourceByID(resourceID)


      })

  }

});

///////// Similar functions for add / update rating ////////

/*const addNewReviewIsRating = function (user_id, resource_id, rating) {

  return pool.query(`

  INSERT INTO resource_reviews (user_id, resource_id, rating)
  VALUES ($1, $2, $3)
  RETURNING *;`, [user_id, resource_id, rating])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
}

const setRatingValue = function (user_ID, resource_ID, ratingValue ) {

  return pool.query(`

    UPDATE resource_reviews
    SET rating = $3
    WHERE user_id = $1 AND resource_id = $2
    RETURNING *;
    `, [user_ID, resource_ID, ratingValue])
  .then(res => res.rows)
  .catch(err => console.log(err));
}
*/






// POST  /resources/comments/new
// Post new comment on specific resource page

router.post("/resources/comments/new", (req, res) => {

});



module.exports = router;
