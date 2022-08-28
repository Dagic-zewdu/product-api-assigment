const { dburl } = require('../config');
const mongoose = require("mongoose");

const dbConnect = (databaseUrl = dburl) => {
    return mongoose
        .connect(databaseUrl)
        .then(() => console.log("Database connected"))
        .catch((err) => console.error("Database connection failed", err));
};

module.exports = dbConnect