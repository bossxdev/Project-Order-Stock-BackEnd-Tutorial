import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    ProductID: { type: String, required: true, max: 100 },
    ProductName: { type: String, required: true, max: 100 },
    Quantity: { type: String, required: true, max: 100 },
    ShelfID: { type: String, required: true, max: 100 }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
