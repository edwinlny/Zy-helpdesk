import React, { useState } from 'react';
import AccentButton from './AccentButton';
import axios from 'axios';



//add toast

//TO-do - conditional color rendering for Status bar
const Table = (props) => {
  const { ticketData, setTicketData } = props;
  const [selectedTicket, setSelectedTicket] = useState({});

  const handleRowClick = (item) => {
    setSelectedTicket(item);
    console.log('selectedtix', selectedTicket);
  };

  const handleResponseChange = (e) => {
    setSelectedTicket((prevState) => ({
      ...prevState,
      response: e.target.value,
    }));
  };
  const handleStatusChange = (newStatus) => {
    setSelectedTicket((prevState) => ({
      ...prevState,
      status: newStatus,
    }));
  };

  const handleTicketSubmit = async () => {
    try {
      const response = await axios.put(
        `/tickets/${selectedTicket.id}`,
        selectedTicket
      );
      console.log('Updated ticket', response);
      setTicketData((prevData) => {
        return prevData.map((ticket) => {
          if (ticket.id === selectedTicket.id) {
            return { ...ticket, ...selectedTicket }; 
          }
          return ticket;
        });
      });
    } catch (error) {
      console.log('Failed to update db', error);
    }
  };

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Summary</th>
            <th>Response</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {ticketData.map((item) => (
            <tr
              key={item.id}
              className='hover'
              onClick={() => {
                handleRowClick(item);
                document.getElementById('my_modal_1').showModal();
              }}
            >
              <th>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.response}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <dialog id='my_modal_1' className='modal'>
        <div className='modal-box bg-neutral-content min-h-screen  w-full sm:w-6/12 flex flex-col'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>

            <div className='card w-full  '>
              <div className='card-body'>
                <div className='flex justify-between'>
                  <div className='badge badge-accent badge-outline rounded-box max-w-100 text-lg p-6'>
                    Customer Name: {selectedTicket.name}
                  </div>
                  <div className='badge badge-accent badge-outline rounded-box max-w-100 text-lg p-6'>
                    Category: TBD
                  </div>
                  <div className='dropdown bg-accent'>
                    <div tabIndex={0} role='button' className='btn m-1'>
                      Status: {selectedTicket.status}
                    </div>
                    <ul
                      tabIndex={0}
                      className='dropdown-content z-[1] menu p-2  rounded-box w-52'
                    >
                      <li>
                        <a onClick={() => handleStatusChange('New')}>New</a>
                      </li>
                      <li>
                        <a onClick={() => handleStatusChange('In Progress')}>
                          In Progress
                        </a>
                      </li>
                      <li>
                        <a onClick={() => handleStatusChange('Resolved')}>
                          Resolved
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='text-primary pt-20'>Customer Issue</div>
                <div className='box-border h-32  p-4 border-4 border-primary'>
                  <p>{selectedTicket.description}</p>
                </div>
                <div className='text-primary'> Response</div>

                <input
                  type='text'
                  value={selectedTicket.response}
                  onChange={handleResponseChange}
                  className='input input-bordered input-primary h-32'
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <button
                className=' btn btn-active btn-accent '
                onClick={handleTicketSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Table;
