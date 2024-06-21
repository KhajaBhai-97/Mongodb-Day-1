Try out below commands to connect database & collections

use mongodb-tasks

Q1.Find all the information about each products?
Ans: db.products.find();

Q2.Find the product price which are between 400 to 800?
Ans: db.products.find({product_price: {$lt:800, $gt:400}});

Q3.Find the product price which are not between 400 to 600?
Ans: db.products.find({product_price: { $not: { $gt: 400, $lt: 600 } }});

Q4.List the four product which are greater than 500 in price?
Ans: db.products.find({product_price: {$gt: 500}}, {}, {limit:4});

Q5.Find the product name and product material of each products?
Ans:  db.products.find({}, {product_name: 1, product_material: 1});

Q6.Find the product with a row id of 10?
Ans:  db.products.find({id: "10"});

Q7.Find only the product name and product material?
Ans:  db.products.find({}, {product_name: 1, product_material: 1, _id: 0});

Q8.Find all products which contain the value of soft in product material?
Ans:  db.products.find({product_material: {$regex: "Soft"}});

Q9.Find products which contain product color indigo  and product price 492.00?
Ans: db.products.find({product_color : {$eq : "indigo"} , product_price : {$eq : 492 }});

Q10.Delete the products which product price value are 28?
Ans:  db.products.deleteOne({product_price: 28});

