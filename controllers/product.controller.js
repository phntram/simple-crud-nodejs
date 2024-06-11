const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
            message: 'Get all products successful',
            data: products
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json({
            message: "Get product by id successful",
            data: product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req, res) => {
    // console.log(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json({
            message: 'Created successful',
            data: product
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                data: null
            });
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json({
            message: "Product udpated successfully",
            data: updatedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if (!product) {
            return res.status(404).json({
                message: 'Product not found',
                data: null
            });
        }
        res.status(200).json({
            message: "Product deleted successfully",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProducts, getAProduct, createProduct, updateProduct, deleteProduct };