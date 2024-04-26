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

  const handleCloseModal = () => {
    document.getElementById('my_modal_1').close();
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
              className='hover cursor-pointer odd:bg-gray-100'
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
      <dialog id='my_modal_1' className='modal' onClick={handleCloseModal}>
        <div
          className='modal-box bg-neutral-content min-h-64  w-full sm:w-6/12 flex flex-col overflow-hidden'
          onClick={(e) => e.stopPropagation()}
        >
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>

            <div className='card w-full  '>
              <div className='card-body'>
                <div className='flex-col'>
                  <div className='text-primary font-light text-lg'>
                    Customer Name: {selectedTicket.name}
                  </div>
                  <div className='text-primary  font-light text-lg'>
                    Ticket ID: {selectedTicket.id}
                  </div>
                  <div className='text-primary  font-light text-lg'>
                    Status:
                    <div className='join pl-2 '>
                      <input
                        
                        className='join-item btn bg-base-300'
                        type='radio'
                        name='options'
                        aria-label='New'
                        onClick={() => handleStatusChange('New')}
                      />
                      <input
                        className='join-item btn bg-base-300'
                        type='radio'
                        name='options'
                        aria-label='In Progress'
                        onClick={() => handleStatusChange('In Progress')}
                      />
                      <input
                        className='join-item btn bg-base-300'
                        type='radio'
                        name='options'
                        aria-label='Resolved'
                        onClick={() => handleStatusChange('Resolved')}
                      />
                    </div>
                  </div>
                </div>
                <div className='text-primary pt-8'>Customer Issue</div>
                <div className='  p-4 border border-primary'>
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
