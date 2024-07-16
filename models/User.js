import mongoose from "mongoose";
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    UserID: {type: String, required: true, max: 100},
    Username: {type: String, required: true, max: 100},
    Password: {type: String, required: true, max: 100},
    Email: {type: String, required: true, max: 100},
});

module.exports = mongoose.model('User', UserSchema);
