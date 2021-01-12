// require database file
const { getUserByID, getAllResources, getUserResourcesByUserID, getUserByEmail, getResourceReviewsByOwnerID,
        getResourceReviewsByResourceID, addNewUser, addNewComment, getSpecificResourceByID,
        getCommentsForSpecificResource, addNewResources, addNewReviewIsRating, getResourcesByCategory,
        getSpecificCategoryInfo, getIsLikeValue , setIsLikeValue, addNewReviewsIsLike, updateUserName
      } = require('./database');


// // function 1

// // Test getUserByID
// // SEED DATA: ____________ ;
/*const user_id = 3;

// callfunction and provide valid seed data.
getUserByID(user_id).then(res => {

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


const user_id = 3;
// getResourceReviewsByOwnerID
getResourceReviewsByOwnerID(user_id).then(res => {

    console.log("output from getResourceReviewsByOwnerID Query is: ")
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

const resource_id = 4;
// getResourceReviewsByResourceID
getResourceReviewsByResourceID(resource_id).then(res => {

  console.log("output from getResourceReviewsByResourceID Query is: ")
  console.log(res);

}).catch(err => console.log(err));


// Test addNewUser
const username = 'BeePisuthigomol';
const email = 'bee@email.com';
const password = 'password'

addNewUser(username, email, password).then(res => {

  console.log("output from addNewUser Query is: ")
  console.log(res);

}).catch(err => console.log(err));


// Test addNewComment
const user_id = 3;
const resource_id = 3;
const created_at = '2020-07-06T04:05:06.000Z';
const comment = 'Porta lorem mollis aliquam ut porttitor leo a. Tristique sollicitudin nibh sit amet commodo. Feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.';

addNewComment(user_id, resource_id, created_at, comment).then(res => {

  console.log("output from addNewComment Query is: ")
  console.log(res);

}).catch(err => console.log(err));



// TEST updateUserName function ///////////////////////////////////////////////

/*

let user_id = 11;
let username = 'jordan';

updateUserName(user_id, username).then(res => {

  console.log("output from updateUserName Query is: ")
  console.log(res);

}).catch(err => console.log(err));

*/
