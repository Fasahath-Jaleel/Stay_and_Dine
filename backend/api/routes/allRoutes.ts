import express from 'express';
import { addPlace, getPlaceNames, getPlaces, getCounts } from '../controllers/placeController';
import { signup, login } from '../controllers/authController';
import { addReview, getReviews, getReview } from '../controllers/reviewController';

const router = express.Router();
router.post('/auth/signup', signup);
router.post('/auth/login', login);

router.get('/getPlaces', getPlaces);
router.get('/getCounts', getCounts);
router.get('/getPlaceNames', getPlaceNames);
router.post('/addPlace', addPlace);

router.get('/getReviews', getReviews);
router.get('/getReview/:placeId', getReview);
router.post('/addReview', addReview);

// router.put('/notes/:id', updateNote);
// router.delete('/notes/:id', deleteNote);


export default router;
