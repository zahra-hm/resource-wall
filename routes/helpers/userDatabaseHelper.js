const pool = require('../database');

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

module.exports = { getUserByID };