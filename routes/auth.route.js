import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

const jwtGenerate = (user) => {
    const accessToken = jwt.sign(
        { name: user.name, id: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30m", algorithm: "HS256" }
    );

    return accessToken;
}

const jwtRefreshTokenGenerate = (user) => {
    const refreshToken = jwt.sign(
        { name: user.name, id: user._id },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d", algorithm: "HS256" }
    );

    return refreshToken;
}

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username and password
        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Generate JWT tokens
        const access_token = jwtGenerate(user);
        const refresh_token = jwtRefreshTokenGenerate(user);

        // Save the refresh token with the user
        user.refreshToken = refresh_token;
        await user.save();

        res.json({
            access_token,
            refresh_token,
        });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
