// const Order = require("../model/Order");
// const stripe=require('stripe')(
//     "sk_test_51LM231SIiDyURhxDcwcDsr2pkYCLeu8MVqvXDNB50gap0qkfEBn108H0GH0s3NHaS68eWsR1ocBhbniPOLghGSAL00WDJsrnCf"
// )
// const createOrder = async (req, res) => {
//     try {
//         const { user, items, totalAmount } = req.body;
//         const session = await stripe.checkout.sessions.create({
//             payment_method_types: ["card"],
//             line_items: [
//                 {
//                     price_data: {
//                         currency: "inr",
//                         product_data: {
//                             name: "paid for food",
//                         },
//                         unit_amount: totalAmount * 100,
//                     },
//                     quantity: 1,
//                 }
//             ],
//             mode: "payment",
//             success_url: "http://localhost:5173/success",
//             cancel_url: "http://localhost:5173/cancel",
//         });
//         if (session.id) {
//             const newOrder = new Order({
//                 user,
//                 items,
//                 totalAmount,
//             });
//             const saveOrder = await newOrder.save();
//             await Order.findByIdAndUpdate(saveOrder._id, {
//                 payment: true,
//             });
//             res.status(200).json({
//                 success: true,
//                 message: "Order created successfully",
//                 data: saveOrder,
//                 sessionId: session.id,
//             });
//         } else {
//             res.status(500).json({
//                 success: false,
//                 message: "Unable to create checkout session",
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// }

// const createOrder=async(req,res)=> {
//     try{
//         const { user, items, totalAmount } = req.body;

//        const session=await stripe.checkout.sessions.create({
//         payment_method_types:["card"],
//         line_items:[
//             {
//                 price_data:{
//                     currency:"inr",
//                     product_data: {
//                       name:"paid for food",
//                     },
//                     unit_amount:totalAmount * 100,
//                 }
//             }
//         ],
//         mode: "payment",
//           success_url:"http://localhost:5173/success",
//           cancel_url:"http://localhost:5173/cancel",
//        });
//        if(session.id){
//         const newOrder=new Order({
//                user,
//                items,
//                totalAmount,
//        });
//          const saveOrder=await newOrder.save();
//          await Order.findByIdAndUpdate(saveOrder._id,{
//             payment: true,

//          });

//          res.status(500).json({
//             success: true,
//             message:"Order created succesfully",
//             data:saveOrder,
//             sessionId: session.id,

//         });
//        } else {
//         res.status(200).json({
//             success: true,
//             message:"Not success"
//        })
//     }

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success: false,
//             message:"Internal server error",
//         });
//     }
// }

//chatgpt

// const Order = require("../model/Order");

// const createOrder = async (req, res) => {
//     try {
//         const { userId, items, totalAmount } = req.body;

//         // Assuming you have a model for users to get user details, or you can directly use userId if available in the request body

//         // Create a new order document
//         const newOrder = new Order({
//             userId,
//             items,
//             totalAmount,
//         });

//         // Save the order to the database
//         const savedOrder = await newOrder.save();

//         res.status(200).json({
//             success: true,
//             message: "Order created successfully",
//             data: savedOrder,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// }

// module.exports = {
//     createOrder,
// };


// const markOrderAsDelivered=async(req,res)=> {
//     try{
//     const{orderId}=req.body;
      
     
//     const order=await Order.findById(orderId);
//     order.status='Delivered';
//     await order.save();

//          res.status(500).json({
//             success: true,
//             data:order,
//             message:"Delivered",
         
//         });
      
    

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success: false,
//             message:"Internal server error",
//         });
//     }
// }

// const getAllOrders=async(req,res)=> {
//     try{
//        const orders=await Order.find().populate("items.food").populate("user");
      
     

//          res.status(500).json({
//             success: true,
//             data:orders,
         
//         });
      
    

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success: false,
//             message:"Internal server error",
//         });
//     }
// }

// const getSingleOrder=async(req,res)=> {
//     try{
//         const {userId} = req.body;
//        const userOrders=await Order.find({user:userId}).populate("items.food").populate("user");
     

//          res.status(500).json({
//             success: true,
//             data:userOrders,
         
//         });
      
    

//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             success: false,
//             message:"Internal server error",
//         });
//     }
// }

// module.exports={
//     createOrder,
//     getAllOrders,
//     getSingleOrder,
//     markOrderAsDelivered
// };

// const Order = require("../model/Order");

// const createOrder = async (req, res) => {
//     try {
//         const { userId, items, totalAmount } = req.body;

//         // Create a new order document
//         const newOrder = new Order({
//             userId,
//             items,
//             totalAmount,
//             status: 'Pending' // Assuming initial status is 'Pending'
//         });

//         // Save the order to the database
//         const savedOrder = await newOrder.save();

//         res.status(200).json({
//             success: true,
//             message: "Order created successfully",
//             data: savedOrder,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// }

// const markOrderAsDelivered = async (req, res) => {
//     try {
//         const { orderId } = req.body;

//         // Find the order by orderId
//         const order = await Order.findById(orderId);

//         // Update the status to 'Delivered'
//         order.status = 'Delivered';
//         await order.save();

//         res.status(200).json({
//             success: true,
//             data: order,
//             message: "Order marked as delivered",
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// }

// const getAllOrders = async (req, res) => {
//     try {
//         // Fetch all orders and populate related data
//         const orders = await Order.find().populate("items.food").populate("user");

//         res.status(200).json({
//             success: true,
//             data: orders,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// }

// const getSingleOrder = async (req, res) => {
//     try {
//         const { userId } = req.body;

//         // Fetch orders for a specific user and populate related data
//         const userOrders = await Order.find({ user: userId }).populate("items.food").populate("user");

//         res.status(200).json({
//             success: true,
//             data: userOrders,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// }

// module.exports = {
//     createOrder,
//     getAllOrders,
//     getSingleOrder,
//     markOrderAsDelivered
// };


const Order = require("../model/Order");
const User = require("../model/User")
const createOrder = async (req, res) => {
    try {
        const { userId, items, totalAmount , address } = req.body;
        
        const newOrder = new Order({
            user: userId,
            items: items,
            totalAmount: totalAmount,
            payment: true,
            address: address, 
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({
            success: true,
            message: "Order created successfully",
            data: savedOrder,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
//real
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("user").populate("items.food");
        
        res.status(200).json({
            success: true,
            data: orders,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
// const getAllOrders = async (req, res) => {
//     try {
//         const orders = await Order.find()
//             .populate({
//                 path: 'user',
//                 select: 'name' // Select the 'name' field from the user document
//             })
//             .populate({
//                 path: 'items',
//                 populate: {
//                     path: 'food',
//                     select: 'name' // Select the 'name' field from the food document
//                 }
//             });
        
//         res.status(200).json({
//             success: true,
//             data: orders,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };

// const getSingleOrder = async (req, res) => {
//     try {
//         const { orderId } = req.params;
//         const order = await Order.findById(orderId).populate("user").populate("items.food");

//         if (!order) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Order not found",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: order,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };
// const getSingleOrder = async (req, res) => {
//     try {
//         const { userId } = req.params;
//         const orders = await Order.find({ user: userId }).populate("items.food").populate("user");

//         if (!orders || orders.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No orders found for this user",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: orders,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };



const markOrderAsDelivered = async (req, res) => {
    try {
        const { orderId } = req.params;

        // Find the order by orderId
        const order = await Order.findById(orderId);

        // Update the status to 'Delivered'
        order.status = 'Delivered';
        await order.save();

        res.status(200).json({
            success: true,
            data: order,
            message: "Order marked as delivered",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
const cancelOrder = async (req, res) => {
    try {
        const { orderId } = req.params;

        // Find the order by orderId and delete it from the database
        const deletedOrder = await Order.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return res.status(404).json({
                success: false,
                message: "Order not found or already cancelled",
            });
        }

        res.status(200).json({
            success: true,
            message: "Order cancelled successfully",
            data: deletedOrder,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

module.exports = {
    cancelOrder
};
// Assuming you have a model named Order

// const getmyOrders = async (req, res) => {
//     try {
//         const userId = req.params.userId; // Assuming userId is passed as a route parameter
//         const orders = await Order.find({ user: userId }).populate("items.food").populate("user");

//         res.status(200).json({
//             success: true,
//             data: orders,
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// };
// const getMyOrder = async (req, res) => {
//     try {
//         const orders = await Order.find({ user: req.body.userId }).populate('items');
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
// const getOrdersByUser = async (req, res) => {
//     try {
//         const orders = await Order.find({ user: req.params.userId }).populate('items');
//         console.log('Orders:', orders); // Add this line
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }
//its work main
const getOrdersByUser = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId })
            .populate('user', 'name') // Populate the 'user' field with only the 'name' attribute
            .populate({
                path: 'items',
                populate: {
                    path: 'food',
                    select: 'name' // Select the 'name' field from the food document
                }
            });
        console.log('Orders:', orders); // Log the fetched orders
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
// const getOrdersByUser = async (req, res, next) => {
//     try {
//       const userId = req.params.userId;
//       const orders = await Order.find({ user: userId }).populate('items');
//       res.json(orders);
//     } catch (error) {
//       // Pass the error to the error handling middleware
//       next(error);
//     }
//   };
  


// const getOrdersByUser = async (req, res) => {
//     try {
//         // Find the user by name
//         const user = await User.findOne({ name: req.params.userName });

//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Find orders for the specified user ID
//         const orders = await Order.find({ user: user._id })
//             .populate('user', 'name')
//             .populate({
//                 path: 'items',
//                 populate: {
//                     path: 'food',
//                     select: 'name'
//                 }
//             });
//         console.log('Orders:', orders);
//         res.json(orders);
//     } catch (error) {
//         console.error('Error fetching orders by user:', error);
//         res.status(500).json({ message: error.message });
//     }
// };
module.exports = {
    getOrdersByUser
};

module.exports = {
    createOrder,
    getAllOrders,
    // getSingleOrder,
    markOrderAsDelivered,
    cancelOrder,
   // getMyOrder ,
    // getOrdersByEmail,
    getOrdersByUser
};
