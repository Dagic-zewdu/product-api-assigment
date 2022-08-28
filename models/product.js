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
    max_price: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: false,
    },
    views: {
        type: Number,
        default: 0,
        required: false,
    },
    istangible: {
        type: Boolean,
        required: true,
    },
    isDownloadable: {
        type: Boolean,
        required: true,
    },
    tags: {
        type: [String],
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "GalleryCategory",
    },
    status: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0,
        required: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    imagesValues: [
        {
            url: { type: String, required: true },
            latitude: { type: Number, default: 0 },
            longitude: { type: Number, default: 0 },
            capturedYear: {
                type: Date,
                default: Date.now(),
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

gallerySchema.index({ "$**": "text" });

const Gallery = mongoose.model("Gallery", gallerySchema);
exports.Gallery = Gallery;