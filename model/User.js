const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const UserSchema = new mongoose.Schema({
        name: {
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique: true,
            validate:[validator.isEmail, "Please provide email"],
        },
        password:{
            type:String,
            required:true,
            minlength:8,
            select:false,
        },
        passwordConfrim:{
            type:String,
            required:true,
            minlength:8,
              select:false,
             validate: {
                validator: function (el){
                    return el===this.password;
                },
                message: "Password are not match",

            },
        },
        isVerified: {
            type: Boolean,
            default: false,
            select: false // This line is optional, based on your requirement
        },
        otp: {
            type:Number,
        },
        role:{
            type:String,
            enum:["user","admin"],
            default:"user",
        },
        street: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false
        },
        state: {
            type: String,
            required: false
        },
        zipCode: {
            type:String,
            required: false,
        },
        country: {
            type: String,
            required: false
        },
        profileImage:{
            type:String,
            required:true,
        },
      
    },
    {
        timestamps:true,
    }
);

module.exports=mongoose.model("User",UserSchema);