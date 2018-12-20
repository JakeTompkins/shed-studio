const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Posts should have a location that will be determined using a Regex to parse out the img tags when Olivia is done editing. OR, locations could be kept track of in React. Look into the best way to do that.

const PostSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users"
	},
	title: {
		type: String,
		required: true
	},
	body: {
		type: String,
		require: true
	},
	media: [
		{
			url: {
				type: String,
				required: true
			},
			location: {
				type: String,
				required: true
			},
			category: {
				type: String,
				required: true
			}
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Post = mongoose.model("posts", PostSchema);
