import mongoose from "mongoose";
// Define the schema for quizzes
const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Quiz title is required'],
    },
    courseCode: {
        type: String,
        required: [true, 'Course code is required'],
    },
    topic:{
        type:String,
        required:[true, 'Course topic is required'],
    },
    dueTo:{
        type:Date,
        // Default due date is set to current date and time
        default: Date.now 
    },
    type:{
        type: String,
        // Type must be one of these options
        enum: ['Assignment', 'Quiz'],
        required: [true, 'Type is required and must be either Assignment or Quiz'],
    },
}, {
    // Add timestamps for createdAt and updatedAt
    timestamps: true
});
// Create a model for quizzes using the schema
export const QuizModel = mongoose.model('Quiz', quizSchema);