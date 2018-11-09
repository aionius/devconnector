const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is a required field";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is a required field";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};