import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://fooddel:fooddel2003@cluster0.oz2uc.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}