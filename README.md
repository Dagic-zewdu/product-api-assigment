### Product-api-assigment

 This assigment given from [apify](https://apify.notion.site/Web-Automation-Dev-Home-assignment-public-f9be3a1c6b9543b29e5bccb9d9382a9c).I used the Mongodb database and mongoose to connect to the database and manipulate queries.

   * The API is called via a simple GET request without a need for special headers and it will return JSON data.
   * `/api/products` is the api get way
   * If no query parameters are provided, the API will return a JSON list of 1000 products sorted by date of registration.
   
   ```js
   {
    "total": 99999, // All products registered length
    "count": 1000, // length of products that in the products array  
    "products": [{}, {}, ...]// Products info
   }
   ```
   * To filter products, use query parameters.  for example, include maximum and minimum price in the query filter products.

   `/api/products?maxPrice=0&minPrice=3000`