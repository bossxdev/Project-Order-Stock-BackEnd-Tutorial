import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.route('/create-product').post(async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        console.log(product);
        res.json(product);
    } catch (err) {
        next(err);
    }
});

router.route('/').get(async (req, res, next) => {
    try {
        const products = await Product.find();
        console.log(products);
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
        console.log(product);
        res.json(product);
    } catch (err) {
        next(err);
    }
});

router.route("/update-product/:id").put(async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // This returns the updated document
        );
        res.json(updatedProduct);
        console.log("Product updated successfully!");
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

export default router;
