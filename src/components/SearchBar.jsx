import React, {useState}  from "react";

const Searchbar = (props) => {
  const {ticketData, setFilteredTickets} = props;
  
  const [query, setQuery] = useState('');
 
  // const getFilteredItems = (query, items) => {
  //   if (!query) {
  //     return items;
  //   } else {
  //     return items.filter((item) => {
  //       return Object.values(item).some((value) =>
  //         value.toString().toLowerCase().includes(query.toLowerCase())
  //       );
  //     });
  //   }
  // };
  const getFilteredItems = (query, items) => {
    console.log("Query:", query);
    console.log("Items:", items);
    
    if (!query) {
      console.log("No query, returning all items");
      return items; 
    } else {
      const filtered = items.filter((item) => {
        const match = Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        );
        console.log("Item:", item);
        console.log("Match:", match);
        return match;
      });
      console.log("Filtered items:", filtered);
      return filtered;
    }
  };
  
//add debounce
  const handleSearch = (e) => {
    const query = e.target.value;
    console.log('query', query)
    setQuery(query);
    const filteredTickets = getFilteredItems(query, ticketData);
    console.log('filteredTix', filteredTickets)
    setFilteredTickets(filteredTickets);
  };

  
  return (
    
    <label className='input input-bordered flex items-center gap-2'>
      <input type='text' className='grow' placeholder='Search' value={query} onChange={handleSearch} />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 16 16'
        fill='currentColor'
        className='w-4 h-4 opacity-70'
      >
        <path
          fillRule='evenodd'
          d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
          clipRule='evenodd'
        />
      </svg>
    </label>
  );
};

export default Searchbar;
