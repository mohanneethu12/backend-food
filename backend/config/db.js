import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arkadyuti:64511648848@cluster0.y0jbc.mongodb.net/Tomato').then(() => console.log("DB Connected"))
}