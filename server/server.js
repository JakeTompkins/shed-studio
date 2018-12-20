const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Import routes
const users = require("./routes/users");
const posts = require("./routes/posts");

// Initialize Express
const app = express();

// Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

// Config and connect to DB
const db = require("./config/keys").mongoURI;
mongoose
	.connect(db)
	.then(() => console.log("DB Connected"))
	.catch(err => console.log(err));

// Config passport
require("config/passport.js")(passport);

// TODO: Use Routes

// Set port number
const port = process.env.PORT || 3001;

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));
