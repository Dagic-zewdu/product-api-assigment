const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    icon: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Category = mongoose.model("Category", categorySchema);
exports.Gallery = Category;