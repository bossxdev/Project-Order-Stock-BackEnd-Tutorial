import mongoose from 'mongoose';
import express from 'express';
import User from '../models/User.js'; // Import the User model

const router = express.Router();

router.route('/create-user').post((req, res, next) => {
    User.create(req.body, (err, user) => {
        if (err) return next(err);
        console.log(user);
        res.json(user);
    });
});

router.route('/').get((req, res, next) => {
    User.find((err, users) => {
        if (err) return next(err);
        console.log(users);
        res.json(users);
    });
});

router.route('/edit-user/:id').get((req, res, next) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return next(err);
        console.log(user);
        res.json(user);
    });
});

router.route('/update-user/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
        if (err) return next(err);
        res.json(user);
        console.log("User updated successfully!");
    });
});

router.route('/delete-user/:id').delete((req, res, next) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) return next(err);
        res.status(200).json({ msg: user });
    });
});

export default router;
