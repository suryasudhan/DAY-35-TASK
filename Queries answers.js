//! 1,Find all the information about each products

//?input

db.product.find();

//! 2,Find the product price which are between 400 to 800

//?input

db.product.find({ $and : [{ 'product_price': { $gt:400 , $lt:800 } }] });

//! 3,Find the product price which are not between 400 to 600

//?input

db.product.find({$or: [ {'product_price':{$lt:400}} , {'product_price':{$gt:600}} ]});

//! 4,List the four product which are greater than 500 in price

//?input

db.product.find({ 'product_price':{$gte:500}}).limit(4);

//! 5,Find the product name and product material of each products

//?input

db.product.find({},{'product_name':1,'product_material':1,'_id':0});

//! 6,Find the product with a row id of 10

//?input

db.product.find({'id':"10"});

//! 7,Find only the product name and product material

//?input

db.product.find({},{'product_name':1,'product_material':1,'_id':0});

//! 8,Find all products which contain the value of soft in product material

//?input

db.product.find({ 'product_material': "Soft" });

//! 9,Find products which contain product color indigo  and product price 492.00

//?input

db.product.find({$or: [{ 'product_color': { $eq: "indigo" } }, { 'product_price': { $eq: 492 } }] });

//! 10,Delete the products which product price value are 28

//?input

db.product.deleteOne({'product_price':28});