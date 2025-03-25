import mongoose from "mongoose";

export const connectToDb = async () => {
    const uri = process.env.MONGO_URI;
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
    }
    mongoose.connection.on("error", (error) => {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1);
        
    });
}