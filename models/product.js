const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1
    },
    views: {
        type: Number,
        default: 0,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    imagesValues: [{ type: String, required: true }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


const Product = mongoose.model("Product", productSchema);
exports.Gallery = Product;