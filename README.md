### Product-api-assigment

 This assigment given from [apify](https://apify.notion.site/Web-Automation-Dev-Home-assignment-public-f9be3a1c6b9543b29e5bccb9d9382a9c).I used the Mongodb database and mongoose to connect to the database and manipulate queries.

   * The API is called via a simple GET request without a need for special headers and it will return JSON data. Here is the [file](https://github.com/Dagic-zewdu/product-api-assigment/blob/main/controllers/products/index.js)
   * `/api/products` is the api get way
   * I make an [algorithm](https://github.com/Dagic-zewdu/product-api-assigment/blob/main/apiQuery/index.js) to filter and paginate based on query
   * If no query parameters are provided, the API will return a JSON list of 1000 products sorted by date of registration.
   
   ```js
   {
    "total": 99999, // All products registered length
    "count": 1000, // length of products that in the products array no mire than 1000 
    "products": [{}, {}, ...]// Products info
   }
   ```
   * To filter products, use query parameters.  for example, include maximum and minimum price in the query filter products.

   `/api/products?maxPrice=200&minPrice=3000` will return a Json

   ```js
   {
    "total": 2000, // All products length between price range 200-3000 
    "count": 1000, // length of products that in the products array no more than 1000  
    "products": [{}, {}, ...]// Products info
   }
   ```

   `/api/products?category="325434343"` will return a Json
 
 ```js
   {
    "total": 2000, // All products with the provided category id 
    "count": 1000, // length of products that in the products array no more than 1000  
    "products": [{}, {}, ...]// Products with given category id
   }
   ```
   * With the page and limit fields on the query, you can add pagination.For instance look at this query

   `/api/products?page=1&limit=20`
   ```js
   {
    "total": 9999, // All products length 
    "count": 20, // length of products that in the products array no more than 20 because it is specified on the limit  
    "products": [{}, {}, ...]// Products from 1-20
   }
   ```

  * You can also sort products. For instance you can sort through in views

   `/api/products?sort="-views"` query to get the latest viewed items will return json
   
  ```js
   {
    "total": 99999, // All products registered length
    "count": 1000, // length of products that in the products array no mire than 1000 
    "products": [{}, {}, ...]// Products info
   }
   ```
## Author

👤 **Dagic Zewdu**

- GitHub: [@Dagic-zewdu](https://github.com/Dagic-zewdu)
- Twitter: [@dagic4](https://twitter.com/dagic4)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/dagic-zewdu/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!