import mongoose from "mongoose";
// Define a function to establish connection to the MongoDB database
export const connection = async () => {
    // Connect to the MongoDB database using the provided connection string
    return await mongoose.connect('mongodb+srv://ahmedmoustafa1803:anyware@cluster0.ntrapee.mongodb.net/').then(()=>{
        console.log('DB connected');
    }).catch(() => {
        console.log('error');
    });
}