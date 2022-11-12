import express from 'express';
import dotenv from 'dotenv';
import cors from  'cors';
import bodyParser from 'body-parser';
const app = express();
const port = 8000;

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';

app.use(cors());
app.use(bodyParser.json({ extended : true }));
app.use(bodyParser.urlencoded({ extended : true }));
app.use('/', Routes);

dotenv.config();
const USERNAME =process.env.DB_USERNAME;``
const PASSWORD =process.env.DB_PASSWORD;


Connection(USERNAME, PASSWORD);

app.listen(port,() =>
   console.log(`Server is running on localhost: ${port}`)
);

DefaultData();