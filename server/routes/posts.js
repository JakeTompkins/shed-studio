const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load validations
const validatePost = require("./validations/posts");

// Import user model
const Post = require("../models/Post");

// Get
// Index all posts

Router.get("/posts", (req, res) => {
	const start = req.params.start || 0;

	Post.find({}, (err, posts) => {
		if (err) {
			console.log(err);
		} else {
			posts = posts.slice(start, start + 5);
			res.json({ posts });
		}
	});
});

// Protected routes

// Post
// Create new post

Router.post(
	"/posts",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		// Validate
		const { errors, isValid } = validatePost(req.body);
		if (!isValid) res.status(400).json(errors);

		// TODO: Figure out how to parse and store the media
		console.log(req.body);
	}
);
