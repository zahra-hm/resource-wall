// require database file
const { addNewUser,
  addNewComment,
  getUserByID,
  getAllResources,
  getUserResourcesByUserID,
  getResourceReviewsByOwnerID,
  getResourceReviewsByResourceID
} = require('./database');
//


// // function 1

// // Test getUserByID
// // SEED DATA: ____________ ;
/*const user_id = 3;
// callfunction and provide valid seed data.
getUserByID(user_id).then(res => {

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


const user_id = 3;
// getResourceReviewsByOwnerID
getResourceReviewsByOwnerID(user_id).then(res => {

console.log("output from getResourceReviewsByOwnerID Query is: ")
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

*/
