// require database file
const { getUserByID, addNewUser, getAllResources, getUserResourcesByUserID, getResourceReviewsByUserID , getResourcesByCategory } = require('./database');
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

  console.log("output from getUserResourcesByUserID Query is: ")
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
let category_id = 4;

getResourcesByCategory(category_id).then(res => {

  console.log("output from getResourcesByCategory Query is: ")
  console.log(res);

}).catch(err => console.log(err));
