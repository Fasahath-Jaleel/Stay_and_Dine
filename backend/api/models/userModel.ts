import mongoose, { Schema } from 'mongoose';

export interface IUser {
    firstName: string;
    lastName: string;
    address: string;
    mobile: string;
    email: string;
    password: string;
}

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },

});

const User = mongoose.model<IUser>('User', userSchema);

export default User;