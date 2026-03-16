import { Request, Response } from "express";
import Review from "../models/reviewModel";

export const addReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.send({ success: true, review });
  } catch (error) {
    res.send({ success: false, message: error });
  }
};

export const getReviews = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const allReviews = await Review.find({})
      .populate("user", "firstName lastName")
      .populate("place");
    res.send({ success: true, allReviews });
  } catch (error) {
    res.send({ success: false, message: error });
  }
};

export const getReview = async (req: Request, res: Response): Promise<void> => {
  try {
    const { placeId } = req.params;

    // Find reviews by placeId
    const allReviews = await Review.find({ place: placeId })
      .populate("user", "firstName lastName")
      .populate("place");
    res.send({ success: true, allReviews });
  } catch (error) {
    res.send({ success: false, message: error });
  }
};