import express from 'express';
const router = express.Router();
//Add any additional controllers here
import ticketController from '../controllers/ticketController.js';

//TO-DO: fix response codes
router.post('/', ticketController.createTicket, (req, res) => {
  res.status(200).json({ message: 'Ticket created successfully' });
});

router.delete('/:ticketID', ticketController.deleteTicket, (req, res) => {
  res.status(200).json({ message: 'Ticket deleted successfully' });
});

router.put('/:ticketID', ticketController.updateTicket, (req, res) => {
  res.status(200).json({ message: 'Ticket updated successfully' });
});

router.get('/', ticketController.getTickets, (req, res) => {
  res.status(200).json(res.locals);
});

router.get('/:ticketID', ticketController.getTickets, (req, res) => {
  res.status(200).json(res.locals);
});

export default router;
