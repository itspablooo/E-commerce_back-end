# E-commerce_back-end

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Description

  E-Comerce Back-End with API routs for viewing, creating, updating, and deleting data records in a SQL server. 

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Test)
  * [Questions](#Questions)
  ## Installation

  Navigate to the E-commerce_back-end/db directory then:

  Run ``myql -u <username> -p`` to enter the SQL shell. Then run ``SOURCE schema.sql`` to create the required database. A SQL server will need to be installed to do this. 

  Navigate to the E-commerce_back-end directory then:

  Run ``npm run seed`` to seed the database with mock data.

  Run ``npm start`` to start the server. 

  ## Usage

  ### GET:
  
| Endpoint |    Description     |
|----------|--------------------|
| /api/categories | get all category items and associated products |
| /api/categories/:id    | get a single category with associating products by id |
| /api/products    | get all products with associating category and tags |
| /api/product/:id | get a single product with associating category and tags by id |
| /api/tags | get all tags with associating products |
| /api/tags/:id | get a single tag and associating products by id |

  ### POST:

| Endpoint |    Description     |
|----------|--------------------|
| api/categories | add a new category with the following input: category_name(string) |
| api/products | add a new product with the following input: product_name (string), price (decimal), stock (integer), category_id (integer)
| api/tags | add a new tag with the following input: tag_name (string)

  ### PUT:

| Endpoint |    Description     |
|----------|--------------------|
| api/categories/:id | Update a category with the specified id |
| api/products/:id | Update a product with the specified id |
| api/tags/:id | Update a tag with the specified id |

  ### DELETE:

| Endpoint |    Description     |
|----------|--------------------|
| api/categories/:id | Delete a category with the specified id |
| api/products/:id | Delete a product with the specified id |
| api/tags/:id | Delete a tag with the specified id |

  ## License

  This project is covered under the MIT License

  ## Contributing

  N/A

  ## Test

  N/A

  ## Questions
  
  For any questions please visit my Github at <https://github.com/itspablooo> or email me at <pablomrivera@outlook.com>