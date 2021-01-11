// require database file
const {getUserByID} = require('./database');
//



// function 1

// Test getUserByID
// SEED DATA: ____________ ;
user_id = 1;
// callfunction and provide valid seed data.
getUserByID(user_id).then(res => {

  //
  console.log("output from getUserByID Query is: ")
  console.log(res);

}).catch(err => console.log(err));

