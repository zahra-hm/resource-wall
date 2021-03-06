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
  let likeOrNot;


  // Check if user is logged-in, otherwise redirect to index page
  const user_id = req.session.user_id;
  console.log("********** user_id = ", user_id);

  if (user_id) {

    databaseHelper.getUserByID(user_id)
      .then(result => {
        user_email = result.email;

        return databaseHelper.getAllInfoSpecificResource(resource_id);

      })
      .then(result => {
        console.log('Result for getAllInfoSpecificResource ', result);

        resource_info = result;
        return databaseHelper.getCommentsForSpecificResource(resource_id);

      })
      .then(result => {

        comments_info = result;
        console.log('Result for getCommentsForSpecificResource ', result);

        return databaseHelper.getIsLikeValue(user_id, resource_id);

      })
      .then(result => {
        console.log('Result for getIsLikeValue ', result);

        if (result.length === 0) {

          likeState = false;
          likeOrNot = 'Not Liked!';

        } else {

          likeState = result[0].islike;
          if (likeState) {
            likeOrNot = 'Liked!';
          } else {
            likeOrNot = 'Not Liked!'
          }

        }

        console.log("Result for likeState is ", likeState);

        const templateVars = {
          user_email,
          resource_id,
          resource_info,
          comments_info,
          likeState,
          likeOrNot,
          userId: user_id
        }

        res.render("specific_resource", templateVars);

      });

  } else {

    res.send("Please login or register to view requested page");

  }
});

// POST  /resources/:resource_id/like
// Set isLike to true/false on specific resource page

router.get("/:resource_id/like", (req, res) => {

  let resource_id = req.params.resource_id;
  let resource_info;
  let isLiked;


  const user_id = req.session.user_id;

  if (user_id) {

    databaseHelper.getIsLikeValue(4, 10)
    .then(result => {
      if (result.length === 0) {
        res.send('Unhandled user case... Developers in training :/')
      } else {
        isLiked = result[0].islike;
        if (isLiked) {
          isLiked = false;
        } else {
          isLiked = true;
        }
        return databaseHelper.setIsLikeValue(user_id, resource_id, isLiked);
      }
    }).then(result => {
      res.redirect(`/resources/${resource_id}`);

    })

  } else {
    res.send("Must log in to view!!");
  }

});


router.post("/rate", (req, res) => {
  // check if user is logged in and if yes, otherwise redirect to index page with message.
  let user_id = req.session.user_id;

  if (user_id) {

    let ratingInput = req.body.rating;
    let user_email;
    let allResources;
    console.log("RATE INPUT IS: ", ratingInput);

    databaseHelper.getUserByID(user_id)
    .then(result => {
      console.log("Result for getUserByID is ", result);
    })

    // need to get email to display the logged-in user for the element id="navbarDropdown" on ejs for main_resource.ejs
  //   databaseHelper.getUserByID(user_id)
  //     .then(result => {

  //       user_email = result.email;

  //       //res.send(result);

  //       //console.log('result is: ', result);
  //       // get all resources from the user
  //       return databaseHelper.getAllResourcesMatchingSearch(searchInput);

  //       // send the templateVars with all the resources inside ejs template.

  //     }).then(result => {

  //       console.log("Result is: ", result);
  //       //let avgRating = result;
  //       allResources = result;

  //       //resourceDate = allResources.created_at;


  //       let templateVars = {
  //         user_email: user_email,
  //         allResources: allResources

  //       };

  //       res.render("main_resource", templateVars);

  //     });
  // } else {
  //   res.send("Please login or register to view requested page");
  //   console.log("Please login or register to view requested page");
  }

});




// POST  /resources/comments/new
// Post new comment on specific resource page

// router.post("/resources/comments/new", (req, res) => {

// });

// POST  /resources/comments/new
// Post new comment on specific resource page

router.post("/comments/:resource_id/new", (req, res) => {

  let resource_id = req.params.resource_id;
  let comment = req.body.newComment;
  let date = new Date();

  const user_id = req.session.user_id;

  if (user_id) {

    databaseHelper.getUserByID(user_id)
      .then(result => {

        return databaseHelper.addNewComment(user_id, resource_id, date, comment);

      })
      .then(result => {

        res.redirect(`/resources/${resource_id}`);

      })
      .catch(error => console.log(error));

  }
});

module.exports = router;
