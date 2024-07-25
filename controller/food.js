const Food = require("../model/Food")

const createFood=async(req,res)=> {
    try{
        const{ name,price,description,category,weight,foodImage } = req.body;
        const newFood = new Food({
            name,
            price,
            description,
            category,
            weight,
            foodImage,
        });
        console.log(newFood);
        const saveFood = newFood.save();
        res.status(200).json({
            
            message: " Food succeesfully added",
             success: true,
             data : {
                food: saveFood,
               

             },
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:"Internal server error",
            success:false,
        });
    }
};
//getAllFoods
const getAllFoods = async (req,res) => {
    try{ 
        const {category}=req.query;
        console.log(category);
        if(category==="all"){
        const foodItems = await Food.find();
        
         res.status(200).json({
            message: " Food succeesfully added",
             success: true,
             data : {
                food: foodItems,

             },
        });
        
    }  else {
        const foodItems = await Food.find({ category : category });
        res.status(200).json({
            message: " Food succeesfully added",
             success: true,
             data : {
                food: foodItems,

             },
        });
    }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:"internal server error",
            success:false,
        });
    }
}

// const getNeWFoods = async (req,res) => {
//     try{ 
//         const category = req.query.category;
//         console.log(category);
//         if(category==="all"){
//         const foodItems = await Food.find().sort({createdAt: -1 }).limit(12);
        
//          res.status(200).json({
//             message: " 12 register food showing",
//              success: true,
//              data : {
//                 food: foodItems,

//              },
//         });
//     }
   
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({
//             error:"internal server error",
//             success:false,
//         });
//     }
//  }

//new
const getNeWFoods = async (req, res) => {
    try {
        const category = req.query.category; // Ensure category is defined
        console.log(category);
        if (category === "all") {
            const foodItems = await Food.find().sort({ createdAt: -1 }).limit(12);

            res.status(200).json({
                message: "12 registered food items showing",
                success: true,
                data: {
                    food: foodItems,
                },
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error",
            success: false,
        });
    }
};


//chatgpt below getNewfoods
// const getNeWFoods = async (req, res, category) => {
//     try {
//         console.log(category);
//         if (category === "all") {
//             const foodItems = await Food.find().sort({ createdAt: -1 }).limit(12);

//             res.status(200).json({
//                 message: "12 register food showing",
//                 success: true,
//                 data: {
//                     food: foodItems,
//                 },
//             });
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             error: "internal server error",
//             success: false,
//         });
//     }
// };


const getFoodsFromDistinctCatagory = async (req,res) => {
    try{ 
       
        
        const distinctCatagory = await Food.distinct('category');
        const distinctfood=await Promise.all(
            distinctCatagory.slice(0,4).map(async (category)=> {
                const food=await Food.findOne({ category });
                return food;
            })
        )
        
         res.status(200).json({
            message: " 4 diifrent category food",
             success: true,
             data : {
                food: distinctfood,

             },
        });
    

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:"internal server error",
            success:false,
        });
    }


}

const getTopRating = async (req,res) => {
    try{ 
       
        
        const topRatedFoods = await Food.find().sort({'reviews.rating': -1 }).limit(4)
       
        
         res.status(200).json({
            message: " 4 diifrent catagory food",
             success: true,
             data : {
                food: topRatedFoods,

             },
        });
    

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:"internal server error",
            success:false,
        });
    }


}



const getFoodById = async (req,res) => {
    try{ 
        const { id }=req.params;
        
        const foodItems = await Food.findById(id);
        
        
         res.status(200).json({
            message: " Food details",
             success: true,
             data : {
                food: foodItems,

             },
        });
       
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error:"internal server error",
            success:false,
        });
    }
}
// const deleteFood = async (req, res) => {
//     try {
//       // Check if the user is an admin (you need to implement this logic)
//       if (!req.user.isAdmin) {
//         return res.status(403).json({ success: false, message: "Only admins can delete food items." });
//       }
  
//       const foodId = req.params.foodId;
  
//       // Find the food item by ID
//       const food = await Food.findById(foodId);
  
//       // Check if the food item exists
//       if (!food) {
//         return res.status(404).json({ success: false, message: "Food item not found." });
//       }
  
//       // Delete the food item
//       await food.remove();
  
//       res.status(200).json({ success: true, message: "Food item deleted successfully." });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ success: false, message: "Internal server error." });
//     }
//   };
//getNeWFoods
// getFoodsFromDistinctCatagory
// deleteFood
module.exports={ createFood , getAllFoods,getNeWFoods, getFoodById ,getFoodsFromDistinctCatagory , getTopRating};