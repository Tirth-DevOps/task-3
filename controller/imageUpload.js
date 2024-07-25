const cloudinary = require('cloudinary')

cloudinary.config({
    cloud_name:"ddcqql6tm",
    api_key:"219588549786597",
    api_secret: "yK_cE9gym1I9vj65CTnLrUHMwE8"
})

const imageUploadController= async(req,res) => {
    try{
      const result = await cloudinary.uploader.upload(req.files.image.path)
      res.json({
        url : result.secure_url,
        public_id: result.public_id,
      })
    } catch (error) {
      console.log(error)
    }
};

module.exports = {imageUploadController};