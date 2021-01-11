// require database file
const { getUserByID, addNewUser } = require('./database');
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


// Test addNewUser
const username = 'BeePisuthigomol';
const email = 'bee@email.com';
const password = 'password'

addNewUser(username, email, password).then(res => {

  console.log("output from addNewUser Query is: ")
  console.log(res);

}).catch(err => console.log(err));


