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


// getResourceReviewsByUserID
// Return resources belong to the user and filtered by isLike = true (order by newest to oldest)

const getResourceReviewsByUserID = function (userID) {

  return pool.query(`

      SELECT resources.*, resource_reviews.isLike, resource_reviews.rating
      FROM resources
      JOIN resource_reviews ON resource_reviews.user_id = resources.owner_id
      WHERE resources.owner_id = $1 AND resource_reviews.isLike = true
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

// getCommentsForSpecificResource

const getCommentsForSpecificResource = function (resource_ID) {

  return pool.query(`

  SELECT *
  FROM resource_comments
  JOIN users ON resource_comments.user_id = users.id
  WHERE resource_id = $1`, [resource_ID])
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


// addNewResources

const addNewResources = function (owner_id, category_id, title, url, description, created_at) {

  return pool.query(`

  INSERT INTO resources (owner_id, category_id, title, url, description, created_at)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;`, [owner_id, category_id, title, url, description, created_at])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
}

// addNewReviewIsRating

const addNewReviewIsRating = function (user_id, resource_id, rating) {

  return pool.query(`

  INSERT INTO resource_reviews (user_id, resource_id, rating)
  VALUES ($1, $2, $3)
  RETURNING *;`, [user_id, resource_id, rating])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
}

// getResourcesByCategory

const getResourcesByCategory = function (category_id) {

  return pool.query(`

  SELECT * FROM resources
  WHERE category_id = $1
  ORDER BY created_at DESC;`, [category_id])
    .then(res => res.rows)
    .catch(err => console.log(err));
}



const getSpecificCategoryInfo = function (category_id) {

  return pool.query(`

    SELECT * FROM categories
    WHERE id = $1`, [category_id])
  .then(res => res.rows)
  .catch(err => console.log(err));
}

const getIsLikeValue = function (user_ID, resource_ID ) {

  return pool.query(`

    SELECT * FROM resource_reviews
    WHERE user_id = $1 AND resource_id = $2;`, [user_ID, resource_ID])
  .then(res => res.rows)
  .catch(err => console.log(err));
}


const setIsLikeValue = function (user_ID, resource_ID, isLikeValue ) {

  return pool.query(`

    UPDATE resource_reviews
    SET isLike = $3
    WHERE user_id = $1 AND resource_id = $2
    RETURNING *;
    `, [user_ID, resource_ID, isLikeValue])
  .then(res => res.rows)
  .catch(err => console.log(err));
}


const addNewReviewsIsLike = function (user_ID, resource_ID, isLikeValue ) {

  return pool.query(`

    INSERT INTO resource_reviews (user_id, resource_id, isLike)
    VALUES ($1, $2, $3)
    RETURNING *;
    `, [user_ID, resource_ID, isLikeValue])
  .then(res => res.rows)
  .catch(err => console.log(err));
}


const updateUserName = function (user_ID, username) {

  return pool.query(`
    UPDATE users
    SET username = $2
    WHERE id = $1
    RETURNING *;
    `, [user_ID, username])
  .then(res => res.rows)
  .catch(err => console.log(err));
}

module.exports = { addNewUser, getUserByEmail, getUserByID, getSpecificResourceByID, getCommentsForSpecificResource, addNewResources, addNewReviewIsRating };

module.exports = { addNewUser, getUserByID, getAllResources, getUserResourcesByUserID, getResourceReviewsByUserID, getResourcesByCategory, getSpecificCategoryInfo, getIsLikeValue , setIsLikeValue, addNewReviewsIsLike, updateUserName};

