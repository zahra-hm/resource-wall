const pool = require('../database');


// getAllResources
// Return all resources info order by newest to oldest

/* Output/returned object from getUserByID is in the format below.
  {
id: 1,
username: "DevinSanders",
email: "tristanjacobs@gmail.com",
password: "$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.",
image_url: "https://icon-library.net/images/generic-user-icon/generic-user-icon-10.jpg"
}

*/
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

const getAllResourcesAvgRating = function () {

  return pool.query(`

  SELECT users.username, resources.*, ROUND(AVG(resource_reviews.rating),1) AS avg
  FROM resources
  JOIN users ON users.id = resources.owner_id
  FULL OUTER JOIN resource_reviews ON resource_reviews.resource_id = resources.id
  GROUP BY resources.id, users.username
  ORDER BY created_at DESC;`)
    .then(res => {

      // console.log("res.rows is, ", res.rows);
      return res.rows;
    })
    .catch(err => console.log(err));

};

const getAllResourcesMatchingSearch = function (searchInput) {
  //searchInput = 'ball';
  return pool.query(`

  SELECT users.username, resources.*, ROUND(AVG(resource_reviews.rating),1) AS avg
  FROM resources
  JOIN users ON users.id = resources.owner_id
  JOIN resource_reviews ON resource_reviews.resource_id = resources.id
  WHERE resources.title LIKE $1
  GROUP BY resources.id, users.username
  ORDER BY created_at DESC;`, [`%${searchInput}%`])
    .then(res => {
      console.log("res is: ", res.rows);
      // console.log("res.rows is, ", res.rows);
      return res.rows;
    })
    .catch(err => console.log(err));

  };

const getAllInfoSpecificResource = function (resource_id) {

  return pool.query(`

  SELECT users.username, resources.*, ROUND(AVG(resource_reviews.rating),1) AS avg
  FROM resources
  JOIN users ON users.id = resources.owner_id
  JOIN resource_reviews ON resource_reviews.resource_id = resources.id
  WHERE resources.id = $1
  GROUP BY resources.id, users.username;`, [resource_id])
    .then(res => {

      // console.log("res.rows is, ", res.rows);
      return res.rows[0];
    })
    .catch(err => console.log(err));

};

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
// Return resources belong to the user and filtered by isLike = true (order by newest to oldest)

const getResourceReviewsByUserID = function (userID) {
  console.log("INSIDE getResourceReviewsBy...");
  return pool.query(`
    SELECT Derived_Table.*, AVG(resource_reviews.rating) AS Avg_Rating FROM (SELECT resources.*
    FROM RESOURCES JOIN resource_reviews ON resources.id = resource_reviews.resource_id
    WHERE resource_reviews.user_id = $1 AND resource_reviews.isLike = true) AS Derived_Table
    JOIN resource_reviews ON
        Derived_Table.id = resource_reviews.resource_id GROUP BY Derived_Table.id, Derived_Table.owner_id, Derived_Table.category_id, Derived_Table.title, Derived_Table.url, Derived_Table.description, Derived_Table.created_at;
    `, [userID])
    .then(res => {
      console.log("res.rows is, ", res.rows);
      if (res.rows) {

       // console.log("res.rows is, ", res.rows);
        return res.rows;

      } else {

        console.log("null returned");
        return null;
      }
    })
    .catch(err => console.log(err));

}

/*  // Gives back all liked resources by user.
  SELECT resources.* FROM RESOURCES
JOIN resource_reviews ON resources.id = resource_reviews.resource_id
WHERE resource_reviews.user_id = 3 AND resource_reviews.isLike = true;

*/

/*  // Gives back rating average for group of resources.
SELECT resources.id, AVG(resource_reviews.rating)
FROM resources
JOIN resource_reviews ON resources.id = resource_reviews.resource_id
WHERE resources.id IN (6,11)
GROUP BY resources.id;

*/
/*
  SELECT Derived_Table.*, AVG(resource_reviews.rating) AS Avg_Rating FROM (SELECT resources.* FROM RESOURCES JOIN resource_reviews ON resources.id = resource_reviews.resource_id WHERE resource_reviews.user_id = 3 AND resource_reviews.isLike = true) AS Derived_Table JOIN resource_reviews ON Derived_Table.id = resource_reviews.resource_id GROUP BY Derived_Table.id, Derived_Table.owner_id, Derived_Table.category_id, Derived_Table.title, Derived_Table.url, Derived_Table.description, Derived_Table.created_at;


*/

// addNewUser

const addNewUser = function (username, email, password2) {

  return pool.query(`

  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;`, [username, email, password2])
    .then(res => res.rows[0])
    .catch(err => console.log(err));
}


// getResourcesByCategory

const getResourcesByCategory = function (category_id) {

  return pool.query(`

  SELECT users.username, resources.*, ROUND(AVG(resource_reviews.rating),1) AS avg
  FROM resources
  JOIN users ON users.id = resources.owner_id
  JOIN resource_reviews ON resource_reviews.resource_id = resources.id
  WHERE category_id =$1
  GROUP BY resources.id, users.username
  ORDER BY created_at DESC;`, [category_id])
    .then(res => res.rows)
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

// addNewResources

const addNewResources = function (owner_id, category_id, title, url, description) {

  return pool.query(`

  INSERT INTO resources (owner_id, category_id, title, url, description)
  VALUES ($1, $2, $3, $4, $5)
  RETURNING *;`, [owner_id, category_id, title, url, description])
    .then(res => {
      console.log('Inside DB, res.rows[0] = ', res.rows[0]);
      return res.rows[0]}
      )
    .catch(err => {
      console.log("CATCH ", err);
    });
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


// addNewComment

const addNewComment = function (user_id, resource_id, created_at, comment) {

  return pool.query(`

  INSERT INTO resource_comments (user_id, resource_id, created_at, comment)
  VALUES ($1, $2, $3, $4)
  RETURNING *;`, [user_id, resource_id, created_at, comment])
    .then(res => res.rows[0])
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

module.exports = {getAllResourcesMatchingSearch , getAllInfoSpecificResource, getAllResourcesAvgRating, addNewComment, getResourceReviewsByResourceID,getResourceReviewsByOwnerID, addNewReviewIsRating, addNewResources, getCommentsForSpecificResource, getSpecificResourceByID,getUserByEmail, addNewUser, getUserByID, getAllResources, getUserResourcesByUserID, getResourceReviewsByUserID, getResourcesByCategory, getSpecificCategoryInfo, getIsLikeValue , setIsLikeValue, addNewReviewsIsLike, updateUserName};




