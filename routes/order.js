// const express = require('express');

// const protect = require("../middleware/authMiddleware");
// const { createFood, getFoodById, getFoodsFromDistinctCatagory,getTopRating } = require('../controller/food');
// const { getAllFoods,getNeWFoods } = require( '../controller/food');
// const { createOrder, getSingleOrder, markOrderAsDelivered } = require('../controller/order');

// const {getAllOrders} = require('../controller/order');
// router=express.Router();
// // router.post("/new-order",newOrder);
// router.post("/order",createOrder);
// router.post('/create', createOrder);
// router.post("/getorders",protect,getAllOrders);
// router.post("/getorder",protect,getSingleOrder);
// router.post("/deliverd",protect,markOrderAsDelivered);;




// // module.exports = router ;
// const express = require('express');
// const protect = require("../middleware/authMiddleware");
// const { createOrder, getSingleOrder, getAllOrders } = require('../controller/order');
// // markOrderAsDelivered,
// const router = express.Router();

// // Route to create a new order
// router.post("/order", createOrder);

// // Route to get all orders (protected route, assuming authentication middleware is applied)
// router.post("/getorders", protect, getAllOrders);

// // Route to get a single order (protected route)
// router.post("/getorder", protect, getSingleOrder);

// // Route to mark an order as delivered (protected route)
// router.post("/deliverd", protect, markOrderAsDelivered);

// module.exports = router;

const express = require('express');
const router = express.Router();
const orderController = require('../controller/order'); // Import orderController
// const protect = require('../middleware/protect');
const Order = require('../model/Order');

const protect = require('../middleware/authMiddleware');
router.get('/protected-route', protect, (req, res) => {
    // This route is protected and will only be accessible if the user is authenticated
    res.send('You are authorized to access this route');
  });
router.post('/order', orderController.createOrder);
router.get('/orders', orderController.getAllOrders);
//  router.get('/orders/:orderId', orderController.getSingleOrder);
// router.get('/orders/user/:userId', orderController.getSingleOrder);
router.put('/orders/:orderId/delivered', orderController.markOrderAsDelivered);
router.delete('/orders/:orderId/cancel', protect, orderController.cancelOrder);
// router.get('/orders', protect, orderController.getmyOrders);
// router.get('/orders/:userId', protect, orderController.getMyOrder);
// router.get('/orders/:email', orderController.getmyOrders);
// router.get('/myorder', orderController.getMyOrder);

//chatgpt
// router.get('/orders/user/:userId', async (req, res) => {
//   try {
//       // Find orders for the specified user ID
//       const orders = await Order.find({ user: req.params.userId }).populate('items');
//       res.json(orders); // Send orders as JSON response
//   } catch (error) {
//       // Handle errors
//       res.status(500).json({ message: error.message });
//   }
// });
//real
router.get('/orders/user/:userId', orderController.getOrdersByUser);
// router.get('/orders/user/:userName', protect, orderController.getOrdersByUser);

module.exports = router;

