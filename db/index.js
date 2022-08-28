const { dburl } = require('../config');
const mongoose = require("mongoose");

const connect = (databaseUrl = dburl) => {
    return mongoose
        .connect(databaseUrl)
        .then(() => console.log("Database connected"))
        .catch((err) => console.error("Database connection failed", err));
};

module.exports = connect