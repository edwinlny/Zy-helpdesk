import Drawer from '../components/Drawer';
import SecondaryButton from '../components/SecondaryButton';
import Table from '../components/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//create (...spread)filtered object, original object, add debounce for filter (0.5 seconds)
const Admin = () => {
  const [ticketData, setTicketData] = useState([]);
  useEffect(() => {
    //create get request
    const getTicketsOnLoad = async () => {
      try {
        let response = await axios.get('/tickets');
        setTicketData(response.data);
        console.log('ticket :', ticketData);
      } catch (error) {
        console.log('Failed to get data from db: ', error);
      }
    };
    getTicketsOnLoad();
  }, []);

  return (
    <div>
      <Drawer />

      <div className='my-36 flex justify-center'>
        <Table ticketData={ticketData} setTicketData={setTicketData} />
      </div>
    </div>
  );
};

export default Admin;
