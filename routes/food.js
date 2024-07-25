const express = require('express');

const protect = require("../middleware/authMiddleware");
const { createFood, getFoodById, getFoodsFromDistinctCatagory,getTopRating } = require('../controller/food');
const { getAllFoods,getNeWFoods } = require( '../controller/food');
const authMiddleware =require('../middleware/authMiddleware')
const foodController = require('../controller/food')
router=express.Router();

router.post("/addfood",protect,createFood);
router.get("/getAllFoods",getAllFoods);
// router.get("/getNeWFoods",getNeWFoods);
//new
router.get("/getNeWFoods", getNeWFoods);

// router.get("/getFoods/:id")
router.get("/getFood/:id",getFoodById);

router.get("/getToRating",getTopRating);
router.get("/specialFoods",getFoodsFromDistinctCatagory);
// router.delete('/:foodId', authMiddleware, foodController.deleteFood);


module.exports = router ;