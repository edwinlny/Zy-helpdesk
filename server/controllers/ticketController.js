import query from '../models/ticketModel.js';
import format from 'pg-format';
const ticketController = {};

ticketController.createTicket = async (req, res, next) => {
  try {
    const values = Object.values(req.body)
    const text = `
      INSERT INTO tickets (name, email, description)
      VALUES($1,$2,$3);
    `
    const data = await query(text, values);
    next()
  } catch (error) {
    console.error('Error creating ticket', error);
    res.status(500).json({ error: 'Failed to createTicket' });
  }
};

export default ticketController;
