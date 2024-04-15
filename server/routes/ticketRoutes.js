import express from 'express';
const router = express.Router();

//Add controllers here
import ticketController from '../controllers/ticketController.js';

router.post('/', ticketController.createTicket, (req, res) => {
  res.status(200).json({ message: 'Ticket created successfully' });
});

export default router;
