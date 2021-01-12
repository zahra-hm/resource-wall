// function 1.

// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const { Pool } = require('pg');
const dbParams = require('../lib/db.js');

// console.log(dbParams);cle

const pool = new Pool(dbParams);
pool.connect();


// getUserByID

const getUserByID = function (userID) {

  return pool.query(`

      SELECT * FROM users
      WHERE id = $1`, [userID])
    .then(res => {
      if (res.rows[0]) {

        // console.log("res.rows is, ", res.rows);
        return res.rows[0];

      } else {

        console.log("null returned");
        return null;
      }
    })
    .catch(err => console.log(err));

}

const getUserByEmail = function (userEmail) {

  return pool.query(`

      SELECT * FROM users
      WHERE email = $1`, [userEmail])
    .then(res => {
      if (res.rows[0]) {

        // console.log("res.rows is, ", res.rows);
        return res.rows[0];

      } else {

        console.log("null returned");
        return null;
      }
    })
    .catch(err => console.log(err));

}


// getAllResources

/*const getAllResources = function () {

  return pool.query(`

  SELECT *
  FROM resources`)
  .then(res => {

    console.log("res.rows is, ", res.rows);
    // return res.rows
  })
}*/


// addNewUser

const addNewUser = function (username, email, password2) {

  return pool.query(`

  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;`, [username, email, password2])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
}

// getSpecificResourceByID

const getSpecificResourceByID = function (resourceID) {

  return pool.query(`

      SELECT * FROM resources
      WHERE id = $1`, [resourceID])
    .then(res => {
      if (res.rows[0]) {

        // console.log("res.rows is, ", res.rows);
        return res.rows[0];

      } else {

        console.log("null returned");
        return null;
      }
    })
    .catch(err => console.log(err));

}


module.exports = { addNewUser, getUserByEmail, getUserByID, getSpecificResourceByID };


