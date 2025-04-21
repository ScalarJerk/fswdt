const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const products = require('./data/sampleProducts');

dotenv.config();

const importData = async () => {
  try {
    await connectDB(); // Make sure DB is connected first

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('✅ Product Data Imported!');
    process.exit();
  } catch (error) {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  }
};

importData();
