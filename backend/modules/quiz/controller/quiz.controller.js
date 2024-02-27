// Importing Announcement model and HTTP status codes
import HttpStatus from 'http-status-codes';
import { QuizModel } from '../../../DB/models/quiz.model.js';

// Controller Functions:
// Create
export const create = async(req,res) => {
    try {
        const {title, courseCode, topic, dueTo, type} = req.body;
        const quiz = new QuizModel({title,courseCode, topic, dueTo, type});
        let savedQuiz = await quiz.save();
        res.status(HttpStatus.CREATED).json({message:'Quiz created successfully', savedQuiz});
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error creating Quiz',error});
    }
};
// Update
export const update = async(req,res) => {
    try {
        const { id } = req.params;
        const {title, courseCode, topic, dueTo, type} = req.body;
        let foundQuiz = await QuizModel.findById(id);
        if(!foundQuiz){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Invalid Quiz Id'});
        } else {
        let updatedQuiz = await QuizModel.findByIdAndUpdate(id,{title, courseCode, topic, dueTo, type},{new:true});
        res.status(HttpStatus.OK).json({message:'Quiz updated successfully', updatedQuiz});
        }
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error updating Quiz',error});
    }
};
// Delete
export const remove = async(req,res) => {
    try {
        const { id } = req.params;
        let foundQuiz = await QuizModel.findById(id);
        if(!foundQuiz){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Invalid Quiz Id'});
        } else {
            await QuizModel.findByIdAndDelete(id);
            res.status(HttpStatus.OK).json({message:'Quiz deleted successfully'});
        }
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error deleting Quiz',error});
    }
};
// Get All
export const getAll = async(req,res) => {
    try {
        let quizzes = await QuizModel.find();
        res.status(HttpStatus.OK).json({message:'Quizzess retrieved successfully',quizzes});
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error retrieving Quizzes',error});
    }
};
// Get By Id
export const getById = async(req,res) => {
    try {
        const {id} = req.params;
        let quiz = await QuizModel.findById(id);
        if(!quiz){
            res.status(HttpStatus.BAD_REQUEST).json({message:'Invalid Quiz Id'});
        } else {
            res.status(HttpStatus.OK).json({message:'Quiz retrieved successfully',quiz});
        }
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:'Error retrieving Quiz',error});
    }
};