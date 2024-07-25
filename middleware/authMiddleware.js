const jwt = require('jsonwebtoken')

const protect = async(req,res,next) => {
    try{
      const token = req.headers["authorization"].split(" ")[1];
      jwt.verify(token,process.env.JWT_SECRET, (err,decode) => {
        if(err) {
            return res.status(200).send({
                message:"Auth failed",
                success:false,
            });
        } else{
            req.body.userId = decode.id;
            next();
        }
    });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: `Auth error`,

        });
    }
};

module.exports = protect;


// const jwt = require('jsonwebtoken');

// const protect = (req, res, next) => {
//   // Check if the authorization header exists
//   if (!req.headers["authorization"]) {
//     return res.status(401).json({
//       success: false,
//       message: "Authorization header missing"
//     });
//   }

//   // Split the authorization header and get the token
//   const token = req.headers["authorization"].split(" ")[1];
  
//   jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//     if (err) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid token"
//       });
//     } else {
//       req.body.userId = decode.id;
//       next();
//     }
//   });
// };

// module.exports = protect;

// const jwt = require('jsonwebtoken');

// const protect = async (req, res, next) => {
//     try {
//         const authHeader = req.headers["authorization"];
//         if (authHeader) {
//             const token = authHeader.split(" ")[1];
//             jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//                 if (err) {
//                     console.error("JWT verification error:", err);
//                     return res.status(200).send({
//                         message: "Auth failed",
//                         success: false,
//                     });
//                 } else {
//                     console.log("Token decoded successfully:", decode);
//                     req.body.userId = decode.id;
//                     next();
//                 }
//             });
//         } else {
//             return res.status(401).send({
//                 message: "Authorization header missing",
//                 success: false,
//             });
//         }
//     } catch (error) {
//         console.error("Error in protect middleware:", error);
//         res.status(500).send({
//             success: false,
//             message: `Auth error`,
//         });
//     }
// };

// module.exports = protect;
