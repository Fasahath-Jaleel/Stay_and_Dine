import { Request, Response } from 'express';
import User from '../models/userModel';
import bcrypt from 'bcryptjs';

const signup = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, address, mobile, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ firstName, lastName, address, mobile, email, password: hashedPassword });
        await user.save();
        res.send({ success: true, message: "User created" });
    } catch (error) {
        res.send({ success: false, message: "An unknown error occurred" });
    }
};

const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.send({ success: false, message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.send({ success: false, message: "Invalid password" });
        }
        res.send({ success: true, userId: user._id });
    } catch (error) {
        res.send({ success: false, message: "An unknown error occurred" });
    }
};

export { signup, login };