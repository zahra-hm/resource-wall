// require database file
const { getUserByID, addNewUser, getAllResources, getUserResourcesByUserID, getResourceReviewsByUserID , getResourcesByCategory, getSpecificCategoryInfo, getIsLikeValue, setIsLikeValue, addNewReviewsIsLike } = require('./database');
//



// // function 1

// // Test getUserByID
// // SEED DATA: ____________ ;
//const user_id = 3;
// callfunction and provide valid seed data.
/*getUserByID(user_id).then(res => {

  console.log("output from getUserByID Query is: ")
  console.log(res);

}).catch(err => console.log(err));


// Test getAllResources
getAllResources().then(res => {

  console.log("output from getAllResources Query is: ")
  console.log(res);

}).catch(err => console.log(err));


// getUserResourcesByUserID
getUserResourcesByUserID(user_id).then(res => {

  console.log("output from getUserResourceconst getSpecificCategoryInfo = function (category_id) {

  return pool.query(`

    SELECT * FROM categories
    WHERE id = $1`, [category_id])
  .then(res => res.rows)
  .catch(err => console.log(err));
}

sByUserID Query is: ")
  console.log(res);

}).catch(err => console.log(err));

*/
// getResourceReviewsByUserID
/*
getResourceReviewsByUserID(user_id).then(res => {

    console.log("output from getResourceReviewsByUserID Query is: ")
    console.log(res);

  }).catch(err => console.log(err));

*/



// // Test addNewUser
// const username = 'BeePisuthigomol';
// const email = 'bee@email.com';
// const password = 'password'

// addNewUser(username, email, password).then(res => {

//   console.log("output from addNewUser Query is: ")
//   console.log(res);

// }).catch(err => console.log(err));


// Test getResourcesByCategory /////////////////////////////////////////

/*
let category_id = 1;
getResourcesByCategory(category_id).then(res => {

  console.log("output from getResourcesByCategory Query is: ")
  console.log(res);

}).catch(err => console.log(err));
*/


/*
// TEST getSpecificCategoryInfo function ///////////////////////////////////////////////

let category_id = 5;
getSpecificCategoryInfo(category_id).then(res => {

  console.log("output from getResourcesByCategory Query is: ")
  console.log(res);

}).catch(err => console.log(err));
*/

/*
// TEST getIsLikeValue function ///////////////////////////////////////////////
let resource_id = 9;
user_id = 12;

getIsLikeValue(user_id,resource_id).then(res => {

  console.log("output from getIsLikeValue Query is: ")
  console.log(res);

}).catch(err => console.log(err));
*/

// TEST setIsLikeValue function ///////////////////////////////////////////////
/*
let user_id = 9;
let resource_id = 5;
let isLikeValue = true;

setIsLikeValue(user_id,resource_id, isLikeValue).then(res => {

  console.log("output from setIsLikeValue Query is: ")
  console.log(res);

}).catch(err => console.log(err));
*/


let user_id = 11;
let resource_id = 6;
let isLikeValue = false;

addNewReviewsIsLike(user_id,resource_id, isLikeValue).then(res => {

  console.log("output from addNewReviewsIsLike Query is: ")
  console.log(res);

}).catch(err => console.log(err));


