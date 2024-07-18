import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ShelfSchema = new Schema({
    ShelfID: { type: String, required: true, max: 100 },
    ShelfName: { type: String, required: true, max: 100 },
    WarehouseID: { type: String, required: true, max: 100 }
});

const Shelf = mongoose.model('Shelf', ShelfSchema);

export default Shelf;
