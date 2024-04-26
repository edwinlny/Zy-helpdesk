import React, { useState } from 'react';
import axios from 'axios';
const Searchbar = ({searchQuery, setSearchQuery}) => {
  const [inputValue, setInputValue] = useState('')
  const handleClick =  async () => {
    // Perform the action you need when the button is clicked
    // In this case, simply update the searchQuery state
    try{
    setSearchQuery(inputValue);
    console.log('searchQuery', searchQuery)
    }catch (error) {
      console.log('failed to search', error)
    }
  };

  // const handleTicketSubmit = async () => {
  //   try {
  //     const response = await axios.put(
  //       `/tickets/${selectedTicket.id}`,
  //       selectedTicket
  //     );
  //     console.log('Updated ticket', response);
  //     setTicketData((prevData) => {
  //       return prevData.map((ticket) => {
  //         if (ticket.id === selectedTicket.id) {
  //           return { ...ticket, ...selectedTicket };
  //         }
  //         return ticket;
  //       });
  //     });
  //   } catch (error) {
  //     console.log('Failed to update db', error);
  //   }
  // };

  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  return (
    <label className='input input-bordered flex items-center gap-2'>
      <input type='text' className='grow' placeholder='Search' value={inputValue} onChange={handleChange}  />

      <button onClick={handleClick} type="button" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search</span>
    </button>
    </label>
  );
};

export default Searchbar;
