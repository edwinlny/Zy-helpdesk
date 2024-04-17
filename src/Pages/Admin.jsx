import NavBar from '../components/NavBar';
import Table from '../components/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from '../components/SearchBar';
//create (...spread)filtered object, original object, add debounce for filter (0.5 seconds)
const Admin = () => {
  const [ticketData, setTicketData] = useState([]);
  // const [filteredTickets, setFilteredTickets] = useState([]);

  useEffect(() => {
    const getTicketsOnLoad = async () => {
      try {
        let response = await axios.get('/tickets');
        setTicketData(response.data);
        // setFilteredTickets(response.data);
      } catch (error) {
        console.log('Failed to get data from db: ', error);
      }
    };
    getTicketsOnLoad();
  }, []);

  return (
    <div>
      <NavBar />
      <div className='text-sm breadcrumbs pl-20'>
        <ul>
          <li>
            <a>Help Desk</a>
          </li>
          <li>
            <a>Admin</a>
          </li>
        </ul>
      </div>
      <div className='my-10 flex justify-center'>
        <Searchbar />
        {/* <Searchbar ticketData={ticketData} setFilteredTicket={setFilteredTickets} /> */}
      </div>
      <div className='my-10 flex justify-center'>
        <Table ticketData={ticketData} setTicketData={setTicketData} />
      </div>
    </div>
  );
};

export default Admin;
