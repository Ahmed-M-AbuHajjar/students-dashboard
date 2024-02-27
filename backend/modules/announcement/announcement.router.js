// Importing Router from Express
import {Router} from 'express';
// Importing announcement controller module
import * as announcementController from './controller/announcement.controller.js'

// Creating a new router instance
const router = Router();
// Define endpoints
router.post('/create', announcementController.create);
router.patch('/update/:id', announcementController.update);
router.delete('/delete/:id', announcementController.remove);
router.get('/', announcementController.getAll);
router.get('/:id', announcementController.getById);



export default router;