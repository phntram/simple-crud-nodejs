const express = require("express");
// require("dotenv").config();
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const mongoose = require('mongoose');
// const Product = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASS);


app.use('/api/products', productRoutes);


// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json({
//             message: 'Get all products successful',
//             data: products
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.get('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json({
//             message: "Get product by id successful",
//             data: product
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// app.post('/api/products', async (req, res) => {
//     // console.log(req.body);
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json({
//             message: 'Created successful',
//             data: product
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

// app.put('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if (!product) {
//             return res.status(404).json({
//                 message: 'Product not found',
//                 data: null
//             });
//         }

//         const updatedProduct = await Product.findById(id);
//         res.status(200).json({
//             message: "Product udpated successfully",
//             data: updatedProduct
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// });

// app.delete('/api/product/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id, req.body);
//         if (!product) {
//             return res.status(404).json({
//                 message: 'Product not found',
//                 data: null
//             });
//         }
//         res.status(200).json({
//             message: "Product deleted successfully",
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

app.get('/', (req, res) => {
    res.status(200).send('Hello from server');
});

// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`);
// });

mongoose.connect(DB).then((con) => {
    // console.log(con.connections);
    console.log('DB connection successful');
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((con) => {
    // console.log(con);
    console.log('Connection fail');
});