const express = require('express');
const router = express.Router();
const TouristController = require('../../controllers/tourist.controller');

router.route('/').post(TouristController.createTourist).get(TouristController.getAlltourist);
router.route('/:id').get(TouristController.gettouristById).put(TouristController.updatetouristById);
router.route('/fetchTop/Fiveplaces').get(TouristController.get_Top_Five_places);
router.route('/fetch/tourist/places').get(TouristController.Fetch_placesWith_state);
router.route('/UpdateTopFive/Places/:id').put(TouristController.UpdateTopFivePlaces);
router.route('/getPopular/RomanticPlace').get(TouristController.getPopular_RomanticPlace);
router.route('/getPlaces/By/State/:id').get(TouristController.getPlaces_By_State);
router.route('/delete/image/:id').put(TouristController.delete_image);
router.route('/Upload/Image/:id').put(TouristController.Upload_Image);
module.exports = router;
