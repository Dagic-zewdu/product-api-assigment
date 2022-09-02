class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
        this.originalQuery = query
    }
    /**
     * filters the schema based on query provided
     * @returns promise fron find functions
     */
    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        let priceRange = {}
        // if maximum and minimum exists
        if (this.queryString.minPrice || this.queryString.maxPrice) {
            let min = this.queryString.minPrice || 0 // default equal to zero
            if (this.queryString.maxPrice) priceRange = {
                price:
                    { $gte: min, $lte: req.queryString.maxPrice }
            }
            else priceRange = { price: { $gte: min } }
        }
        this.query = this.query.find({ ...JSON.parse(queryStr), ...priceRange });

        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }

        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        } else {
            this.query = this.query.select("-v");
        }

        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 1000;// default: 1000 results per page at a time
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);

        return this;
    }
    count() {
        let count = this.query.countDocuments({}).exec();
        return count
    }
    total() {
        let total = this.originalQuery.countDocuments({}).exec()
        return total
    }
}
module.exports = APIFeatures;
