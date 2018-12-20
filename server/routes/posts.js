const express = require("express");
const Router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Load validations
const validatePost = require("./validations/posts");

// Import user model
const Post = require("../models/Post");

// TODO: CRUD Posts
