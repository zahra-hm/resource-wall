// function 1.

// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";

const { Pool } = require('pg');
const dbParams = require('../lib/db.js');

// console.log(dbParams);

const pool = new Pool(dbParams);
pool.connect();


// getUserByID

const getUserByID = function (userID) {

  return pool.query(`

    SELECT * FROM users
    WHERE id = $1;`, [userID])
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
// Return all resources info order by newest to oldest

const getAllResources = function () {

  return pool.query(`

  SELECT *
  FROM resources
  ORDER BY created_at DESC;`)
    .then(res => {

      // console.log("res.rows is, ", res.rows);
      return res.rows;
    })
    .catch(err => console.log(err));

};


// getUserResourcesByUserID
// Return resources belong to the user (order by newest to oldest)

const getUserResourcesByUserID = function (userID) {

  return pool.query(`

    SELECT *
    FROM resources
    WHERE owner_id = $1
    ORDER BY created_at DESC;`, [userID])
    .then(res => {
      if (res.rows[0]) {

        // console.log("res.rows is, ", res.rows);
        return res.rows;

      } else {

        console.log("null returned");
        return null;
      }
    })
    .catch(err => console.log(err));

}


// getResourceReviewsByUserID
// Return resources belong to the owner and filtered by isLike = true (order by newest to oldest)

const getResourceReviewsByOwnerID = function (id) {

  return pool.query(`

    SELECT resources.owner_id,
           resources.id as resourceID,
           resources.category_id,
           resources.title,
           resources.url,
           resources.description,
           resources.created_at,
           resource_reviews.isLike,
           resource_reviews.rating
    FROM resource_reviews
    JOIN resources ON resource_reviews.resource_id = resources.id
    WHERE resources.owner_id = $1 AND resource_reviews.isLike = true
    ORDER BY created_at DESC;`, [id])
    .then(res => {
      if (res.rows[0]) {

        // console.log("res.rows is, ", res.rows);
        return res.rows;

      } else {

        console.log("null returned");
        return null;
      }
    })
    .catch(err => console.log(err));

}


// getResourceReviewsByResourceID

const getResourceReviewsByResourceID = function (resource_id) {

  return pool.query(`

  SELECT resource_reviews.resource_id, avg(rating)
  FROM resource_reviews
  WHERE resource_reviews.resource_id = $1
  GROUP BY resource_reviews.resource_id;`, [resource_id])
    .then(res => res.rows[0])
    .catch(err => console.log(err));

}




// addNewUser

const addNewUser = function (username, email, password) {

  return pool.query(`

  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;`, [username, email, password])
    .then(res => res.rows[0])
    .catch(err => console.log(err));

}

// addNewComment

const addNewComment = function (user_id, resource_id, created_at, comment) {

  return pool.query(`

  INSERT INTO resource_comments (user_id, resource_id, created_at, comment)
  VALUES ($1, $2, $3, $4)
  RETURNING *;`, [user_id, resource_id, created_at, comment])
    .then(res => res.rows[0])
    .catch(err => console.log(err));

}


module.exports = {
  addNewUser, addNewComment, getUserByID,
  getAllResources, getUserResourcesByUserID,
  getResourceReviewsByOwnerID, getResourceReviewsByResourceID
};




