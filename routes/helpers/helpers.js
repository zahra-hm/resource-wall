// Helper Functions

const checkEmail = function (email, func) {

  if (func(email)) {
    return true;
  }
  return false;

}

const checkLoginInfo = function (email, password, func) {

  const isEmailValid = checkEmail(email);
  if (isEmailValid && bcrypt.compareSync(password, func)) {
    return true;
  }
  return false;

}

module.exports = { checkEmail, checkLoginInfo };
