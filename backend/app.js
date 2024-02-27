import express from 'express';
import cors from 'cors';
import { connection } from './DB/connection.js';
import * as routes from './modules/index.routes.js';

const app = express();
// Establish connection to the MongoDB database
connection();
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to enable CORS
app.use(cors());

const baseURL = '/api/v1';
// Mounting routers to their respective base URLs
app.use(`${baseURL}/announcement`, routes.announcementRouter);
app.use(`${baseURL}/quiz`, routes.quizRouter);
// Handling invalid API routes
app.get('*', (req,res) => {
    res.json({message:"invalid api"});
});
// Start the server listening on port 8080
app.listen(8080, () => {
    console.log('server is running...');
});