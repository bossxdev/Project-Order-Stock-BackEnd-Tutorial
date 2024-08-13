import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.route('/create-product').post(async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (err) {
        next(err);
    }
});

router.route('/').get(async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        next(err);
    }
});

router.route('/edit-product/:id').get(async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        next(err);
    }
});

router.route('/update-product/:id').put(async (req, res, next) => {
    try {
        // Extract warehouseId and warehouseName from the request body
        const { warehouseId, warehouseName } = req.body.warehouse;

        // Update the product document with the extracted fields
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: { warehouseId, warehouseName } },
            { new: true } // This returns the updated document
        );
        res.json(updatedProduct);
        console.log('Product updated successfully!');
    } catch (error) {
        next(error);
    }
});

router.route('/delete-product/:id').delete((req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (err, product) => {
        if (err) return next(err);
        res.status(200).json({ msg: product });
    });
});

router.route("/productByWarehouseId/:id").get(async (req, res, next) => {
    try {
        const products = await Product.find({warehouseId: req.params.id});
        if (!products) return res.status(404).json({ message: "Warehouse not found" });
        res.json(products);
    } catch (error) {
        next(error);
    }
});

export default router;
