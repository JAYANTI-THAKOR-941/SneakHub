import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database is Connected Successfully.!!')
    }
    catch(error){
        console.log(`Failed to connect database:${error}`);
    }
}

export default connectDB;