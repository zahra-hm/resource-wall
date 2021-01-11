// function 1.

//
// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
//const express = require("express");
//const bodyParser = require("body-parser");
//const sass = require("node-sass-middleware");
//const app = express();
//const morgan = require('morgan');
// CONNECT TO DATABASE
// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('../lib/db.js');
const db = new Pool(dbParams);
db.connect();


const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'midterm'
});


// module.exports = pool;

pool.connect((err) => {
  if (err) return console.log(err); // Shows error if something happened
});

// getUserByID

const getUserByID = function (userID) {

  return pool.query(`

      SELECT * FROM users
      WHERE id = $1`, [userID])
    .then(res => {
      if (res.rows[0]) {

        console.log("res.rows is, ", res.rows)
        return res.rows[0];

      } else {

        console.log("null returned");
        return null;
      }
    })
    .catch(err => console.log(err));

}


const addNewUser = function (username, email, password2) {

  return pool.query(`

  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;`, [username, email, password2])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
}
module.exports = { addNewUser, getUserByID };
