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

/*
module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/profile/:user_id", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/resources", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/resources/categories/:category_name", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/resources/:resource_id", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

/*
  router.post("/register", (req, res) => {
    // check if user exists (for now use seed data i.e user exists.)
    // if user exists --> error-message (res.send("user already exists with that email")).


    // extract submitted user info from register form submitted.
    let newUserInfo = req.body;

    // post to database first (postNewUser --> post data into database)
     //addNewUser(newUserInfo).catch(err => console.log(err));

    // Logic to make sure user is registered, if registed get the session cookies value for user_id.

    // If not registered

    // require logged in user's info, and also all resources (entire table).
    // const userInfo = getUserData();


    // from database require new_user info
    // from
    console.log(req.body);

    /*
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    */
  //});
  /*
  router.post('/register', (req, res) => {
      //const userId = req.session.userId;
      // 1) check if email already exists , if yes then-error message.
      // res.rend.
    const userID = 14;

    if (userID) {
      // redirect to /urls page
      res.redirect("/urls");
    } else {

      // add New User into Database
    database.addNewUser(newUserInfo)
    .then(console.log("added new user into database"))
    .catch(err => console.log(err));
    // figure-out cookie-session and set cookie.

    // getting logged-in user's info. //
    const userInfo = database.getUserInfo(userID);



    // get all resources tables

    const allResources = database.getAllResources();

      // user_id is not set (i.e not logged in so render login page)
      const templateVars = {
        user: undefined
      };

      // render the login page
      res.render('urls_loginPage.ejs',templateVars);
    }



    /*
    database.addProperty({...req.body, owner_id: userId})
      .then(property => {
        res.send(property);
      })
      .catch(e => {
        console.error(e);
        res.send(e)
      });
      */
  //});


  module.exports = router;




