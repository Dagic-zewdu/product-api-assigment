const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photo: [{
        type: String,
        required: true
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model("Category", userSchema);
exports.Gallery = User;