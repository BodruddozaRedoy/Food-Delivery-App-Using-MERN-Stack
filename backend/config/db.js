import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bodruddozaredoymongodb:redoy1234....@cluster0.aufxz.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
}