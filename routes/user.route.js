import mongoose from "mongoose";
import express from "express";
const router = express.Router();

// User model
const UserSchema = mongoose.model("User");

// Create a new user
router.route('/create-user').post((req, res, next) => {
    UserSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// Read users
router.route('/').get((req, res, next) => {
    UserSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// Get single user
router.route('/edit-user/:id').get((req, res, next) => {
    UserSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});

// Update user
router.route('/update-user/:id').put((req, res, next) => {
    UserSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User updated successfully !')
        }
    })
});

// Delete user
router.route('/delete-user/:id').delete((req, res, next) => {
    UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
});
