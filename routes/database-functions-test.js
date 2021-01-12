// require database file
const { getUserByID, addNewUser, getAllResources, getUserResourcesByUserID, getResourceReviewsByUserID , getResourcesByCategory, getSpecificCategoryInfo, getIsLikeValue, setIsLikeValue, addNewReviewsIsLike, updateUserName } = require('./database');
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


// TEST addNewReviewsIsLike function ///////////////////////////////////////////////
/*
let user_id = 11;
let resource_id = 6;
let isLikeValue = false;

addNewReviewsIsLike(user_id,resource_id, isLikeValue).then(res => {

  console.log("output from addNewReviewsIsLike Query is: ")
  console.log(res);

}).catch(err => console.log(err));
*/

// TEST updateUserName function ///////////////////////////////////////////////

/*

let user_id = 11;
let username = 'jordan';

updateUserName(user_id, username).then(res => {

  console.log("output from updateUserName Query is: ")
  console.log(res);

}).catch(err => console.log(err));

*/
