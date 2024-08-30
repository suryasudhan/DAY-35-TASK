//?create databse 

/*    use fsdtask;   */


//!given the data's

db.product.insertMany([
    {
        "id": "1",
        "product_name": "Intelligent Fresh Chips",
        "product_price": 655.00,
        "product_material": "Concrete",
        "product_color": "mint green"
    },
    {
        "id": "2",
        "product_name": "Practical Fresh Sausages",
        "product_price": 911.0,
        "product_material": "Cotton",
        "product_color": "indigo"
    },
    {
        "id": "3",
        "product_name": "Refined Steel Car",
        "product_price": 690.00,
        "product_material": "Rubber",
        "product_color": "gold"
    },
    {
        "id": "4",
        "product_name": "Gorgeous Plastic Pants",
        "product_price": 492.00,
        "product_material": "Soft",
        "product_color": "plum"
    },
    {
        "id": "5",
        "product_name": "Sleek Cotton Chair",
        "product_price": 33.00,
        "product_material": "Fresh",
        "product_color": "black"
    },
    {
        "id": "6",
        "product_name": "Awesome Wooden Towels",
        "product_price": 474.00,
        "product_material": "Plastic",
        "product_color": "orange"
    },
    {
        "id": "7",
        "product_name": "Practical Soft Shoes",
        "product_price": 500.00,
        "product_material": "Rubber",
        "product_color": "pink"
    },
    {
        "id": "8",
        "product_name": "Incredible Steel Hat",
        "product_price": 78.00,
        "product_material": "Rubber",
        "product_color": "violet"
    },
    {
        "id": "9",
        "product_name": "Awesome Wooden Ball",
        "product_price": 28.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "10",
        "product_name": "Generic Wooden Pizza",
        "product_price": 84.00,
        "product_material": "Frozen",
        "product_color": "indigo"
    },
    {
        "id": "11",
        "product_name": "Unbranded Wooden Cheese",
        "product_price": 26.00,
        "product_material": "Soft",
        "product_color": "black"
    },
    {
        "id": "12",
        "product_name": "Unbranded Plastic Salad",
        "product_price": 89.00,
        "product_material": "Wooden",
        "product_color": "pink"
    },
    {
        "id": "13",
        "product_name": "Gorgeous Cotton Keyboard",
        "product_price": 37.00,
        "product_material": "Concrete",
        "product_color": "sky blue"
    },
    {
        "id": "14",
        "product_name": "Incredible Steel Shirt",
        "product_price": 54.00,
        "product_material": "Metal",
        "product_color": "white"
    },
    {
        "id": "15",
        "product_name": "Ergonomic Cotton Hat",
        "product_price": 43.00,
        "product_material": "Rubber",
        "product_color": "mint green"
    },
    {
        "id": "16",
        "product_name": "Small Soft Chair",
        "product_price": 47.00,
        "product_material": "Cotton",
        "product_color": "teal"
    },
    {
        "id": "17",
        "product_name": "Incredible Metal Car",
        "product_price": 36.00,
        "product_material": "Fresh",
        "product_color": "indigo"
    },
    {
        "id": "18",
        "product_name": "Licensed Plastic Bacon",
        "product_price": 88.00,
        "product_material": "Steel",
        "product_color": "yellow"
    },
    {
        "id": "19",
        "product_name": "Intelligent Cotton Chips",
        "product_price": 46.00,
        "product_material": "Soft",
        "product_color": "azure"
    },
    {
        "id": "20",
        "product_name": "Handcrafted Wooden Bacon",
        "product_price": 36.00,
        "product_material": "Concrete",
        "product_color": "lime"
    },
    {
        "id": "21",
        "product_name": "Unbranded Granite Chicken",
        "product_price": 90.00,
        "product_material": "Metal",
        "product_color": "gold"
    },
    {
        "id": "22",
        "product_name": "Ergonomic Soft Hat",
        "product_price": 99.00,
        "product_material": "Rubber",
        "product_color": "black"
    },
    {
        "id": "23",
        "product_name": "Intelligent Steel Pizza",
        "product_price": 95.00,
        "product_material": "Cotton",
        "product_color": "azure"
    },
    {
        "id": "24",
        "product_name": "Tasty Rubber Cheese",
        "product_price": 47.00,
        "product_material": "Frozen",
        "product_color": "orchid"
    },
    {
        "id": "25",
        "product_name": "Licensed Steel Car",
        "product_price": 20.00,
        "product_material": "Cotton",
        "product_color": "indigo"
    }
]);


//! 1,Find all the information about each products

//?input

db.product.find();

//?output

/*
 {
    _id: ObjectId('66d17faecdb4dc3c7ad8466c'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  }
  {
    _id: ObjectId('66d17faecdb4dc3c7ad8466d'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
  {
    _id: ObjectId('66d17faecdb4dc3c7ad8466e'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  }
  {
    _id: ObjectId('66d17faecdb4dc3c7ad8466f'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  }
  {
    _id: ObjectId('66d17faecdb4dc3c7ad84670'),
    id: '5',
    product_name: 'Sleek Cotton Chair',
    product_price: 33,
    product_material: 'Fresh',
    product_color: 'black'
  }
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84671'),
  id: '6',
  product_name: 'Awesome Wooden Towels',
  product_price: 474,
  product_material: 'Plastic',
  product_color: 'orange'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad84672'),
  id: '7',
  product_name: 'Practical Soft Shoes',
  product_price: 500,
  product_material: 'Rubber',
  product_color: 'pink'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad84673'),
  id: '8',
  product_name: 'Incredible Steel Hat',
  product_price: 78,
  product_material: 'Rubber',
  product_color: 'violet'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad84674'),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad84675'),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad84676'),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad84677'),
  id: '12',
  product_name: 'Unbranded Plastic Salad',
  product_price: 89,
  product_material: 'Wooden',
  product_color: 'pink'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad84678'),
  id: '13',
  product_name: 'Gorgeous Cotton Keyboard',
  product_price: 37,
  product_material: 'Concrete',
  product_color: 'sky blue'
}
{
    _id: ObjectId('66d17faecdb4dc3c7ad84679'),
    id: '14',
    product_name: 'Incredible Steel Shirt',
    product_price: 54,
    product_material: 'Metal',
    product_color: 'white'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad8467a'),
  id: '15',
  product_name: 'Ergonomic Cotton Hat',
  product_price: 43,
  product_material: 'Rubber',
  product_color: 'mint green'
}
{
    _id: ObjectId('66d17faecdb4dc3c7ad8467b'),
    id: '16',
    product_name: 'Small Soft Chair',
    product_price: 47,
    product_material: 'Cotton',
    product_color: 'teal'
}
{
    _id: ObjectId('66d17faecdb4dc3c7ad8467c'),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad8467d'),
  id: '18',
  product_name: 'Licensed Plastic Bacon',
  product_price: 88,
  product_material: 'Steel',
  product_color: 'yellow'
}
{
    _id: ObjectId('66d17faecdb4dc3c7ad8467e'),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad8467f'),
  id: '20',
  product_name: 'Handcrafted Wooden Bacon',
  product_price: 36,
  product_material: 'Concrete',
  product_color: 'lime'
}  
 */

//! 2,Find the product price which are between 400 to 800

//?input

db.product.find({ $and : [{ 'product_price': { $gt:400 , $lt:800 } }] });

//?output

/*
{
  _id: ObjectId('66d17faecdb4dc3c7ad8466c'),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad8466e'),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
{
  _id: ObjectId('66d17faecdb4dc3c7ad8466f'),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
{
    _id: ObjectId('66d17faecdb4dc3c7ad84671'),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
}
{
    _id: ObjectId('66d17faecdb4dc3c7ad84672'),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
}
*/


//! 3,Find the product price which are not between 400 to 600

//?input

db.product.find({$or: [ {'product_price':{$lt:400}} , {'product_price':{$gt:600}} ]});

//?output

/*
{
  _id: ObjectId('66d17faecdb4dc3c7ad8466c'),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8466d'),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8466e'),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84670'),
  id: '5',
  product_name: 'Sleek Cotton Chair',
  product_price: 33,
  product_material: 'Fresh',
  product_color: 'black'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84673'),
  id: '8',
  product_name: 'Incredible Steel Hat',
  product_price: 78,
  product_material: 'Rubber',
  product_color: 'violet'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84674'),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure'
}{
  _id: ObjectId('66d17faecdb4dc3c7ad84675'),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84676'),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84677'),
  id: '12',
  product_name: 'Unbranded Plastic Salad',
  product_price: 89,
  product_material: 'Wooden',
  product_color: 'pink'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84678'),
  id: '13',
  product_name: 'Gorgeous Cotton Keyboard',
  product_price: 37,
  product_material: 'Concrete',
  product_color: 'sky blue'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84679'),
  id: '14',
  product_name: 'Incredible Steel Shirt',
  product_price: 54,
  product_material: 'Metal',
  product_color: 'white'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467a'),
  id: '15',
  product_name: 'Ergonomic Cotton Hat',
  product_price: 43,
  product_material: 'Rubber',
  product_color: 'mint green'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467b'),
  id: '16',
  product_name: 'Small Soft Chair',
  product_price: 47,
  product_material: 'Cotton',
  product_color: 'teal'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467c'),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467d'),
  id: '18',
  product_name: 'Licensed Plastic Bacon',
  product_price: 88,
  product_material: 'Steel',
  product_color: 'yellow'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467e'),
  id: '19',
  product_name: 'Intelligent Cotton Chips',
  product_price: 46,
  product_material: 'Soft',
  product_color: 'azure'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467f'),
  id: '20',
  product_name: 'Handcrafted Wooden Bacon',
  product_price: 36,
  product_material: 'Concrete',
  product_color: 'lime'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84680'),
  id: '21',
  product_name: 'Unbranded Granite Chicken',
  product_price: 90,
  product_material: 'Metal',
  product_color: 'gold'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84681'),
  id: '22',
  product_name: 'Ergonomic Soft Hat',
  product_price: 99,
  product_material: 'Rubber',
  product_color: 'black'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84682'),
  id: '23',
  product_name: 'Intelligent Steel Pizza',
  product_price: 95,
  product_material: 'Cotton',
  product_color: 'azure'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84683'),
  id: '24',
  product_name: 'Tasty Rubber Cheese',
  product_price: 47,
  product_material: 'Frozen',
  product_color: 'orchid'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84684'),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
}
*/

//! 4,List the four product which are greater than 500 in price

//?input

db.product.find({ 'product_price':{$gte:500}}).limit(4);

//?output

/*
{
  _id: ObjectId('66d17faecdb4dc3c7ad8466c'),
  id: '1',
  product_name: 'Intelligent Fresh Chips',
  product_price: 655,
  product_material: 'Concrete',
  product_color: 'mint green'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8466d'),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8466e'),
  id: '3',
  product_name: 'Refined Steel Car',
  product_price: 690,
  product_material: 'Rubber',
  product_color: 'gold'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84672'),
  id: '7',
  product_name: 'Practical Soft Shoes',
  product_price: 500,
  product_material: 'Rubber',
  product_color: 'pink'
}
*/

//! 5,Find the product name and product material of each products

//?input

db.product.find({},{'product_name':1,'product_material':1,'_id':0});

//?output

/*
{
  product_name: 'Intelligent Fresh Chips',
  product_material: 'Concrete'
}
  {
  product_name: 'Practical Fresh Sausages',
  product_material: 'Cotton'
}
  {
  product_name: 'Refined Steel Car',
  product_material: 'Rubber'
}
  {
  product_name: 'Gorgeous Plastic Pants',
  product_material: 'Soft'
}
  {
  product_name: 'Sleek Cotton Chair',
  product_material: 'Fresh'
}
  {
  product_name: 'Awesome Wooden Towels',
  product_material: 'Plastic'
}
  {
  product_name: 'Practical Soft Shoes',
  product_material: 'Rubber'
}
  {
  product_name: 'Incredible Steel Hat',
  product_material: 'Rubber'
}
  {
  product_name: 'Awesome Wooden Ball',
  product_material: 'Soft'
}
  {
  product_name: 'Generic Wooden Pizza',
  product_material: 'Frozen'
}
  {
  product_name: 'Unbranded Wooden Cheese',
  product_material: 'Soft'
}
  {
  product_name: 'Unbranded Plastic Salad',
  product_material: 'Wooden'
}
  {
  product_name: 'Gorgeous Cotton Keyboard',
  product_material: 'Concrete'
}
  {
  product_name: 'Incredible Steel Shirt',
  product_material: 'Metal'
}
  {
  product_name: 'Ergonomic Cotton Hat',
  product_material: 'Rubber'
}
  {
  product_name: 'Small Soft Chair',
  product_material: 'Cotton'
}
  {
  product_name: 'Incredible Metal Car',
  product_material: 'Fresh'
}
  {
  product_name: 'Licensed Plastic Bacon',
  product_material: 'Steel'
}
  {
  product_name: 'Intelligent Cotton Chips',
  product_material: 'Soft'
}
  {
  product_name: 'Handcrafted Wooden Bacon',
  product_material: 'Concrete'
}
*/
//! 6,Find the product with a row id of 10

//?input

db.product.find({'id':"10"});

//?output

/*
{
  _id: ObjectId('66d17faecdb4dc3c7ad84675'),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
*/
//! 7,Find only the product name and product material

//?input

db.product.find({},{'product_name':1,'product_material':1,'_id':0});

//?output

/*
{
  product_name: 'Intelligent Fresh Chips',
  product_material: 'Concrete'
}
  {
  product_name: 'Practical Fresh Sausages',
  product_material: 'Cotton'
}
  {
  product_name: 'Refined Steel Car',
  product_material: 'Rubber'
}
  {
  product_name: 'Gorgeous Plastic Pants',
  product_material: 'Soft'
}
  {
  product_name: 'Sleek Cotton Chair',
  product_material: 'Fresh'
}
  {
  product_name: 'Awesome Wooden Towels',
  product_material: 'Plastic'
}
  {
  product_name: 'Practical Soft Shoes',
  product_material: 'Rubber'
}
  {
  product_name: 'Incredible Steel Hat',
  product_material: 'Rubber'
}
  {
  product_name: 'Awesome Wooden Ball',
  product_material: 'Soft'
}
  {
  product_name: 'Generic Wooden Pizza',
  product_material: 'Frozen'
}
  {
  product_name: 'Unbranded Wooden Cheese',
  product_material: 'Soft'
}
  {
  product_name: 'Unbranded Plastic Salad',
  product_material: 'Wooden'
}
  {
  product_name: 'Gorgeous Cotton Keyboard',
  product_material: 'Concrete'
}
  {
  product_name: 'Incredible Steel Shirt',
  product_material: 'Metal'
}
  {
  product_name: 'Ergonomic Cotton Hat',
  product_material: 'Rubber'
}
  {
  product_name: 'Small Soft Chair',
  product_material: 'Cotton'
}
  {
  product_name: 'Incredible Metal Car',
  product_material: 'Fresh'
}
  {
  product_name: 'Licensed Plastic Bacon',
  product_material: 'Steel'
}
  {
  product_name: 'Intelligent Cotton Chips',
  product_material: 'Soft'
}
  {
  product_name: 'Handcrafted Wooden Bacon',
  product_material: 'Concrete'
}
*/

//! 8,Find all products which contain the value of soft in product material

//?input

db.product.find({ 'product_material': "Soft" });

//?output

/*
{
  _id: ObjectId('66d17faecdb4dc3c7ad8466f'),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84674'),
  id: '9',
  product_name: 'Awesome Wooden Ball',
  product_price: 28,
  product_material: 'Soft',
  product_color: 'azure'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84676'),
  id: '11',
  product_name: 'Unbranded Wooden Cheese',
  product_price: 26,
  product_material: 'Soft',
  product_color: 'black'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467e'),
  id: '19',
  product_name: 'Intelligent Cotton Chips',
  product_price: 46,
  product_material: 'Soft',
  product_color: 'azure'
}
*/

//! 9,Find products which contain product color indigo  and product price 492.00

//?input

db.product.find({$or: [{ 'product_color': { $eq: "indigo" } }, { 'product_price': { $eq: 492 } }] });


//?output

/*
{
  _id: ObjectId('66d17faecdb4dc3c7ad8466d'),
  id: '2',
  product_name: 'Practical Fresh Sausages',
  product_price: 911,
  product_material: 'Cotton',
  product_color: 'indigo'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8466f'),
  id: '4',
  product_name: 'Gorgeous Plastic Pants',
  product_price: 492,
  product_material: 'Soft',
  product_color: 'plum'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84675'),
  id: '10',
  product_name: 'Generic Wooden Pizza',
  product_price: 84,
  product_material: 'Frozen',
  product_color: 'indigo'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad8467c'),
  id: '17',
  product_name: 'Incredible Metal Car',
  product_price: 36,
  product_material: 'Fresh',
  product_color: 'indigo'
}
  {
  _id: ObjectId('66d17faecdb4dc3c7ad84684'),
  id: '25',
  product_name: 'Licensed Steel Car',
  product_price: 20,
  product_material: 'Cotton',
  product_color: 'indigo'
}
*/

//! 10,Delete the products which product price value are 28

//?input

db.product.deleteOne({'product_price':28});

//?output

/*
{
  acknowledged: true,
  deletedCount: 1
}
*/
