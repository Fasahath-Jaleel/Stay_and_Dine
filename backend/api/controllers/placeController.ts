import { Request, Response } from "express";
import Place, { IPlace } from "../models/placeModel";
import User from "../models/userModel";
import Review from "../models/reviewModel";

export const addPlace = async (req: Request, res: Response): Promise<void> => {
  try {
    const place = new Place(req.body);
    await place.save();
    res.send({ success: true, place });
  } catch (error) {
    res.send({ success: false, message: error });
  }
};

export const getPlaces = async (req: Request, res: Response): Promise<void> => {
  try {
    const places = await Place.find({});
    const allReviews = await Review.find({});

    // Calculate average star for each place
    const placesWithAvgStars = places.map((place: IPlace) => {
      const reviewsForPlace = allReviews.filter((review) =>
        review.place.equals(place._id)
      );
      const averageStar = reviewsForPlace.length
        ? reviewsForPlace.reduce((sum, review) => sum + review.star, 0) /
          reviewsForPlace.length
        : 0;

      return {
        ...place.toObject(),
        averageStar: averageStar.toFixed(1), // Optional: round to 1 decimal place
      };
    });

    res.send({ success: true, places: placesWithAvgStars });
  } catch (error) {
    res.send({ success: false, message: error });
  }
};

export const getCounts = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({});
    const places = await Place.find({});
    const reviews = await Review.find({ star: 5 });
    res.send({
      success: true,
      userCount: users.length,
      placeCount: places.length,
      reviewCount: reviews.length,
    });
  } catch (error) {
    res.send({ success: false, message: error });
  }
};
export const getPlaceNames = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const places = await Place.find({}).select("name");
    res.send({ success: true, places });
  } catch (error) {
    res.send({ success: false, message: error });
  }
};

export const updateNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  // try {
  //   const noteId = req.params.id;
  //   const note = await Note.findOne({ _id: noteId });
  //   if (!note) {
  //     res.send({ success: false, message: "Note not found" });
  //     return;
  //   }
  //   note.content = req.body.content;
  //   await note.save();
  //   res.send({ success: true, note });
  // } catch (error) {
  //   res.send({ success: false, message: error });
  // }
};

export const deleteNote = async (
  req: Request,
  res: Response
): Promise<void> => {
  // try {
  //   const noteId = req.params.id;
  //   const note = await Note.findOneAndDelete({ _id: noteId });
  //   if (!note) {
  //     res.send({ success: false, message: "Note not found" });
  //     return;
  //   }
  //   res.send({ success: true, note, message: "Note deleted" });
  // } catch (error) {
  //   res.send({ success: false, message: error });
  // }
};
