import mongoose from "mongoose";
// Define the schema for announcements
const announcementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Announcement title is required'],
    },
    content: {
        type: String,
        required: [true, 'Announcement content is required'],
    },
    courseCode:{
        type:String,
    },
    teacherName:{
        type:String,
        // Validate that the teacher name contains only letters
        validate: {
            validator: function(value) {
                return/^[a-zA-Z\s]+$/.test(value);
            },
            message: 'Teacher name must contain only letters'
        },
        minLength: [2, 'Minimum length 2 characters'],
        maxLength: [20, 'Maximum length 20 characters'],
    }
}, {
    // Add timestamps for createdAt and updatedAt
    timestamps: true
});
// Create a model for announcements using the schema
export const AnnouncementModel = mongoose.model('Announcement', announcementSchema);