import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WarehouseSchema = new Schema({
    WarehouseID: { type: String, required: true, max: 100 },
    WarehouseName: { type: String, required: true, max: 100 },
    Location: { type: String, required: true, max: 100 }
});

const Warehouse = mongoose.model('Warehouse', WarehouseSchema);

export default Warehouse;
