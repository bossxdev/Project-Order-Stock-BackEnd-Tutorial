import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ShelfSchema = new Schema({
    shelfId: { type: String, required: true, max: 100 },
    shelfName: { type: String, required: true, max: 100 },
    warehouseId: { type: String, required: true, max: 100 }
});

const Shelf = mongoose.model('Shelf', ShelfSchema);

export default Shelf;
