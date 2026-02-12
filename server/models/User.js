import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    otp:{
        type:String
    },
    otpExpire:{
        type:Date,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    profileImg:{
        type:String
    }
},{
    timestamp:true
});

const User = mongoose.model('User',userSchema);

export default User;