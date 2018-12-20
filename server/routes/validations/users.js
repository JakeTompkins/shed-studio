const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function validateUser(data) {
	let errors = {};

	const userName = isEmpty(data.userName) ? "" : data.userName;
	const password = isEmpty(data.password) ? "" : data.password;

	if (validator.isEmpty(userName)) {
		errors.userName = "Username cannot be blank";
	} else if (!validator.isLength(userName, { min: 2, max: 20 })) {
		errors.userName = "Username must be between 2 and 20 characters";
	}

	if (validator.isEmpty(password)) {
		errors.password = "Password cannot be blank";
	} else if (!validator.isLength(password, { min: 6 })) {
		errors.password = "Password must contain at least 6 characters";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
