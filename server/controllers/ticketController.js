import query from '../models/ticketModel.js';
import format from 'pg-format';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
const ticketController = {};

//To-do - improve error handling on all methods
ticketController.createTicket = async (req, res, next) => {
  try {
    const values = Object.values(req.body);
    const text = `
      INSERT INTO tickets (name, email, description)
      VALUES($1,$2,$3);
    `;
    const data = await query(text, values);
    next();
  } catch (error) {
    console.error('Error creating ticket', error);
    res.status(500).json({ error: 'Failed to create ticket' });
  }
};

ticketController.deleteTicket = async (req, res, next) => {
  try {
    //To-Do - Create logic to only delete if value exists
    const ticketID = req.params.ticketID;

    const text = `
      DELETE FROM tickets
      WHERE id = $1;
    `;
    const data = await query(text, [ticketID]);
    next();
  } catch (error) {
    console.error('Error deleting ticket', error);
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
};

ticketController.updateTicket = async (req, res, next) => {
  try {
    const { ticketID } = req.params;
    const { status, response } = req.body;
    
    const text = `
    UPDATE tickets
    SET status = $1, response = $2
    WHERE id = $3;
    `;
    const values = [status, response, ticketID];
    const data = await query(text, values);
    
    next();
  } catch (error) {
    console.error('Error  updating ticket', error);
    res.status(500).json({ error: 'Failed to update ticket' });
  }
};

ticketController.getTickets = async (req, res, next) => {
  try {
    //PRIOR IMPLEMNENTATION OF RAW SQL
    // let data;
    // let text;
    // const { ticketID } = req.params;
    // if (ticketID) {
    //   text = `
    //   SELECT * FROM tickets
    //   WHERE id = $1;
    //   `;
    //   data = await query(text, [ticketID]);
    // } else {
    //   text = `
    //   SELECT * FROM tickets
    //   ORDER BY created_at DESC
    //   ;
    //   `;
    //   data = await query(text);
    // }
    
    // res.locals = data.rows
    const tickets = await prisma.tickets.findMany({
      orderBy: [
        {
          created_at: 'desc'
        }
      ]
    })
    res.locals = tickets
    console.log('get on load')
    next();
  } catch (error) {
    console.error('Error getting ticket(s)', error);
    res.status(500).json({ error: 'Failed to get ticket(s)' });
  }
};

ticketController.searchTickets = async (req, res, next) => {
  const {query} = req.query
  console.log('query is:', query)
  try {
   
    const tickets = await prisma.tickets.findMany({
      where: {
        name: {
          contains: query
        }
      }
    })
    res.locals = tickets
    next();
  } catch (error) {
    console.error('Error getting ticket(s)', error);
    res.status(500).json({ error: 'Failed to get ticket(s)' });
  }
};

export default ticketController;
