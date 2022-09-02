class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
        this.originalQuery = query
    }
    filterParams() {

        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);// change to string
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);// stringify object
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
        return ({ ...JSON.parse(queryStr), ...priceRange });
    }
    /**
     * filters the schema based on query provided
     * @returns promise from find functions
     */
    filter() {
        this.query = this.query.find(this.filterParams());
        return this;
    }
    /**
     * sorts schema based onthe quer of sort
     * @returns sorted schema from query
     */
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
    // counts the query results
    count() {
        let count = this.query.countDocuments(this.filterParams()).exec();
        return count
    }
}
module.exports = APIFeatures;
