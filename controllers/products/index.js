const APIFeatures = require('../../apiQuery');
const Product = require("../../models/product")

const getProducts = async (req, res) => {
    const apiFeatures = new APIFeatures(
        Product.find().populate("category").populate("createdBy"),
        req.query
    ).filter().sort().limitFields().paginate()
    const totallPrducts = new APIFeatures(
        Product.find().populate("category").populate("createdBy"),
        req.query
    ).filter()
    const product = await apiFeatures.query;
    const count = await apiFeatures.count();
    const total = await totallPrducts.count()
    res.send({ product, total, count });
}

module.exports = getProducts