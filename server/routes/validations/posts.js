const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = validatePost = data => {
	let errors = {};

	const user = isEmpty(data.user) ? "" : data.user;
	const title = isEmpty(data.title) ? "" : data.title;
	const body = isEmpty(data.body) ? "" : data.body;

	if (validator.isEmpty(user)) {
		errrors.user = "Post must have a user";
	}

	if (validator.isEmpty(title)) {
		errors.title = "Post must have a title";
	} else if (!validator.isLength(title, { min: 2, max: 40 })) {
		errors.title = "Title must be between 2 and 40 characters";
	}

	if (validator.isEmpty(body)) {
		errors.body = "Post must have a body";
	} else if (!validator.isLength(body, { min: 100, max: 1000 })) {
		errors.body = "Body must be between 100 and 10000 characters";
	}
};
