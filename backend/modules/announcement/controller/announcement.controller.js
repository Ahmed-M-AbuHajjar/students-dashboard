// Importing Announcement model and HTTP status codes
import HttpStatus from 'http-status-codes';
import { AnnouncementModel } from '../../../DB/models/announcement.model.js';

// Controller Functions:
// Create
export const create = async(req,res) => {
    try {
        const {title,content,courseCode,teacherName} = req.body;
        const announcement = new AnnouncementModel({title,content,courseCode,teacherName});
        let savedAnnouncement = await announcement.save();
        res.status(HttpStatus.CREATED).json({message:'Announcement created successfully', savedAnnouncement});
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error creating Announcement',error});
    }
};
// Update
export const update = async(req,res) => {
    try {
        const { id } = req.params;
        const { title, content, courseCode, teacherName} = req.body;
        let foundAnnouncement = await AnnouncementModel.findById(id);
        if(!foundAnnouncement){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Invalid Announcement Id'});
        } else {
        let updatedAnnouncement = await AnnouncementModel.findByIdAndUpdate(id,{title,content,courseCode,teacherName},{new:true});
        res.status(HttpStatus.OK).json({message:'Announcement updated successfully', updatedAnnouncement});
        }
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error updating Announcement',error});
    }
};
// Delete
export const remove = async(req,res) => {
    try {
        const { id } = req.params;
        let foundAnnouncement = await AnnouncementModel.findById(id);
        if(!foundAnnouncement){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Invalid Announcement Id'});
        } else {
            await AnnouncementModel.findByIdAndDelete(id);
            res.status(HttpStatus.OK).json({message:'Announcement deleted successfully'});
        }
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error deleting Announcement',error});
    }
};
// Get All
export const getAll = async(req,res) => {
    try {
        let announcements = await AnnouncementModel.find();
        res.status(HttpStatus.OK).json({message:'Announcement retrieved successfully',announcements});
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error retrieving Announcements',error});
    }
};
// Get By Id
export const getById = async(req,res) => {
    try {
        const {id} = req.params;
        let announcement = await AnnouncementModel.findById(id);
        if(!announcement){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Invalid Announcement Id'});
        } else {
            res.status(HttpStatus.OK).json({message:'Announcement retrieved successfully',announcement});
        }
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error retrieving Announcements',error});
    }
};