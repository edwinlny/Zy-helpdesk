import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

const query = (text, params, callback) => {
  console.log('executed query', text);
  return pool.query(text, params, callback);
};

export default query;
