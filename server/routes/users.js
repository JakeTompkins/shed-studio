const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load validations
const validateUser = require("./validations/users");

// Import user model
const User = require("../models/User");

// Post
// Register a new User

Router.post("/register", (req, res) => {
	// Validate
	const { errors, isValid } = validateUser(req.body);
	if (!isValid) res.status(400).json(errors);

	// Check if user exists
	User.findOne({ email: req.body.email }).then(user => {
		if (user) {
			return res.status(400).json({ email: "Email already exists" });
		} else {
			// Create new user with the provided data
			const newUser = new User({
				email: req.body.email,
				password: req.body.password
			});

			// Has password and store hash in place of plain text
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) res.json(err);
					// Set password to the hash
					newUser.password = hash;
					// Save user
					newUser
						.save()
						.then(user => res.json(user).catch(err => console.log(err)));
				});
			});
		}
	});
});

// Post
// Login an existing user

Router.post("/login", (req, res) => {
	// Validate
	const { errors, isValid } = validateUser(req.body);
	if (!isValid) res.status(400).json(errors);

	const email = req.body.email;
	const password = req.body.password;

	// Find the user registered to the provided email
	User.findOne({ email: email }).then(user => {
		if (!user) res.status(404).json({ email: "User not found" });

		// Check that the password matches
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// Create token payload
				const payload = {
					id: user.id,
					email: user.email,
					time: Date.now
				};

				// Sign the token
				jwt.sign(
					payload,
					require("../config/keys").secret,
					{ expiresIn: 3600 },
					(err, token) => {
						res.json({ success: true, token: "Bearer" + token });
					}
				);
			} else {
				res.status(400).json({ password: "Password does not match" });
			}
		});
	});
});
