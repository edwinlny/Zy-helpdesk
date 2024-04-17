import 'dotenv/config';
import express from 'express';
import ViteExpress from 'vite-express';
import ticketRouter from './server/routes/ticketRoutes.js';
import { createTicketsTable } from './server/helperFunctions/helperFunctions.js';

const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/tickets', ticketRouter);

createTicketsTable();

ViteExpress.listen(app, PORT, () =>
  console.log(`Server listening on port: ${PORT}...`)
);
