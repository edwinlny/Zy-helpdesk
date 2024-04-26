import NavBar from '../components/NavBar';
import Table from '../components/Table';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from '../components/SearchBar';
//create (...spread)filtered object, original object, add debounce for filter (0.5 seconds)
const Admin = () => {
  const [ticketData, setTicketData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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

  useEffect(() => {
    const fetchTicketsBySearch = async () => {
      try {
        const response = await axios.get(`/tickets/search?query=${searchQuery}`);
        console.log('do we reach this:', response.data)
        setTicketData(response.data);
      } catch (error) {
        console.error('Error searching tickets', error);
      }
    };

    // Only fetch tickets by search if searchQuery is not empty
    if (searchQuery !== '') {
      fetchTicketsBySearch();
    }
  
  }, [searchQuery]); 
  //create some function to query database onclick and update my ticketData,
  //create endpoint in my controller /search
  

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
        <Searchbar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>
      <div className='my-10 flex justify-center'>
        <Table ticketData={ticketData} setTicketData={setTicketData} />
      </div>
    </div>
  );
};

export default Admin;
