import mongoose, { Document, Schema, Types } from 'mongoose';

interface IReview extends Document {
    user: Types.ObjectId;
    place: Types.ObjectId;
    description: string;
    star:number;
    createdAt: Date;

}

const reviewSchema: Schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    place: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Place'
    },
    description: {
        type: String,
        required: true,
    },
    star: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const Review = mongoose.model<IReview>('Review', reviewSchema);

export default Review;