import mongoose from "mongoose";
const Schema = mongoose.Schema;

let ShelfSchema = new Schema({
    ShelfID: {type: String, required: true, max: 100},
    ShelfName: {type: String, required: true, max: 100},
    WarehouseID: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Shelf', ShelfSchema);
