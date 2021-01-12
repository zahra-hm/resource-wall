// require database file
const { getUserByID, getUserByEmail, addNewUser, getSpecificResourceByID, getCommentsForSpecificResource, addNewResources} = require('./database');
//



// function 1

// Test getUserByID
// SEED DATA: ____________ ;
const user_id = 1;
// callfunction and provide valid seed data.
getUserByID(user_id).then(res => {

  //
  console.log("output from getUserByID Query is: ")
  console.log(res);

}).catch(err => console.log(err));

// Test getAllResources
/*getUserByID(user_id).then(res => {

  //
  console.log("output from getUserByID Query is: ")
  console.log(res);

}).catch(err => console.log(err));*/


// Test addNewUser
const username = 'BeePisuthigomol';
const email = 'bee@email.com';
const password = 'password'

addNewUser(username, email, password).then(res => {

  console.log("output from addNewUser Query is: ")
  console.log(res);

}).catch(err => console.log(err));

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
