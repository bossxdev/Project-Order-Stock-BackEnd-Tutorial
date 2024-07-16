import mongoose from "mongoose";
const Schema = mongoose.Schema;

let WarehouseSchema = new Schema({
    WarehouseID: {type: String, required: true, max: 100},
    WarehouseName: {type: String, required: true, max: 100},
    Location: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('Warehouse', WarehouseSchema);
