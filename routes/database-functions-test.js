// require database file
const { getUserByID, getUserByEmail, addNewUser, getSpecificResourceByID, getCommentsForSpecificResource, addNewResources, addNewReviewIsRating} = require('./database');
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

// Test getUserByEmail

const email2 = 'bellaanthony@gmail.com';

getUserByEmail(email2).then(res => {

  console.log("output from getUserByEmail Query is: ")
  console.log(res);

}).catch(err => console.log(err));

// Test getSpecificResourceByID

const resourceID = 5;

getSpecificResourceByID(resourceID).then(res => {

  console.log("output from getSpecificResourceByIDl Query is: ")
  console.log(res);

}).catch(err => console.log(err));


// Test getCommentsForSpecificResource

const resourceID2 = 2;

getCommentsForSpecificResource(resourceID2).then(res => {

  console.log("output from getCommentsForSpecificResource Query is: ")
  console.log(res);

}).catch(err => console.log(err));

// Test addNewResources

// const resourceID2 = 2;

const owner_id = 5;
const category_id = 2;
const title = 'The Big Bang!';
const url = 'https://en.wikipedia.org/wiki/Big_Bang';
const description = 'The Big Bang theory is a cosmological model of the observable universe from the earliest known periods through its subsequent large-scale evolution';
const created_at = '2019-04-23 09:09:09';

addNewResources(owner_id, category_id, title, url, description, created_at).then(res => {

  console.log("output from addNewResources Query is: ")
  console.log(res);

}).catch(err => console.log(err));


// Test addNewReviewIsRating

const user_id3 =  3;
const resource_id = 2;
const rating = 3;

addNewReviewIsRating(user_id3, resource_id, rating).then(res => {

  console.log("output from addNewReviewIsRating Query is: ")
  console.log(res);

}).catch(err => console.log(err));
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
