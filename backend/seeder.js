import mongoose from 'mongoose';
import dotenv from 'dotenv';

import users from './data/users.js';
import products from './data/products.js';
import Users from './models/userModel.js';
import Products from './models/productModel.js';
import Orders from './models/ordersModel.js';
import connectDb from './config/db.js';

dotenv.config();
connectDb();

const importData = async () => {
  try {
    await Users.deleteMany();
    await Products.deleteMany();
    await Orders.deleteMany();

    // create users
    const createdUsers = await Users.insertMany(users);
    const adminUser = createdUsers[0]._id;

    // Add Products
    const sampleproducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Products.insertMany(sampleproducts);

    console.log('Data Added Successfully !!!');
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Users.deleteMany();
    await Products.deleteMany();
    await Orders.deleteMany();

    console.log('Data Destroyed Successfully !!!');
    process.exit();
  } catch (err) {
    console.log(`Error: ${err}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
