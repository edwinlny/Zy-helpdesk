import query from '../models/ticketModel.js';

export async function createTicketsTable() {
  const createTableQuery = `
  CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    status VARCHAR(255) DEFAULT 'New',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await query(createTableQuery);
    console.log(`Tickets created sucessfully or already exists`);
  } catch (error) {
   
    console.error('Error creating tickets table: ', error);
  }
}
