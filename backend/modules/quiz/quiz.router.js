// Importing Router from Express
import {Router} from 'express';
// Importing quiz controller module
import * as quizController from './controller/quiz.controller.js'

// Creating a new router instance
const router = Router();
// Define endpoints
router.post('/create', quizController.create);
router.patch('/update/:id', quizController.update);
router.delete('/delete/:id', quizController.remove);
router.get('/', quizController.getAll);
router.get('/:id', quizController.getById);



export default router;