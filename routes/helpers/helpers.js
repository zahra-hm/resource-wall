const db = require()

// Helper Functions required checking with team

const checkEmail = function (email) {
  let result = 1;
  db.getUserByEmail(email).then(res => {

    if (res) {
      result = true;
    } else {
      result = false;
    }
  })
  return result;
}

const checkLoginInfo = function (email, password, func) {

  const isEmailValid = checkEmail(email);
  if (isEmailValid && bcrypt.compareSync(password, func)) {
    return true;
  }
  return false;

}

module.exports = { checkEmail, checkLoginInfo };
