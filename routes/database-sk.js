
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


