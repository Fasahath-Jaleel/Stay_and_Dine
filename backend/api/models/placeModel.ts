import mongoose, { Document, Schema } from 'mongoose';

export interface IPlace extends Document {
    _id: string;
    type: string;
    name: string;
    city: string;
    image: string;
    description: string;
    fb: string;
    twitter: string;
    google: string;
    telegram: string;
    location: string;
    averageStar?:number;
}

const placeSchema: Schema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fb: {
        type: String,
        required: true,
    },
    twitter: {
        type: String,
        required: true,
    },
    google: {
        type: String,
        required: true,
    },
    telegram: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

const Place = mongoose.model<IPlace>('Place', placeSchema);

export default Place;