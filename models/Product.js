import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    ProductID: {type: String, required: true, max: 100},
    ProductName: {type: String, required: true, max: 100},
    Quantity: {type: String, required: true, max: 100},
    ShelfID: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Product', ProductSchema);
