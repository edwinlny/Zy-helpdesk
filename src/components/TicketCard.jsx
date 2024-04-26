import React, { useState } from 'react';
import AccentButton from './AccentButton';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//TO-DO - Add success/failure notification, handle data validation
const TicketCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
  
  const handleCloseModal = () => {
   document.getElementById('my_modal_3').close()
  }



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    //To-do create data validation
    //add toast to pop-up
    event.preventDefault();
    
  if(!formData.name || !formData.description) {
    return;
  }
  if (!isValidEmail(formData.email)) {
    console.error('Invalid email address');
    toast.error('Invalid email address')
    return;
  }
  console.log('Form Data', formData);
    
    try {
      const response = await axios.post(
        'tickets',
        {
          name: formData.name,
          email: formData.email,
          description: formData.description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('“Would normally send email here with body: ...”')
      toast.success('Your ticket has been submitted')
      setFormData({
        name: '',
        email: '',
        description: ''
      })
      handleCloseModal()

    } catch (error) {
      console.error('Error occured when submitting :', error);
    }
  };


  return (
    <div className='w-64 bg-base-100 shadow-xl justify-center'>
      <figure className='px-10 pt-10'>
        <img
          src='https://d29fhpw069ctt2.cloudfront.net/icon/image/49079/preview.svg'
          alt='email'
          className='rounded-sm'
        />
      </figure>
      <div className='card-body items-center text-center'>
        <p>Having trouble? </p>
        <div className='card-actions'>
          <button
            className='btn'
            onClick={() => document.getElementById('my_modal_3').showModal()}
          >
            Submit a Ticket
          </button>
          <dialog id='my_modal_3' className='modal'  onClick={handleCloseModal}>
            <div className='modal-box' onClick={e => e.stopPropagation()}>
              
              <form onSubmit={handleSubmit} method='dialog'>
                <button type="button" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={handleCloseModal}>
                  ✕
                </button>
                <h3 className='font-bold text-lg'>Hello!</h3>
                <label className='input input-bordered flex items-center gap-2'>
                  Name
                  <input
                    type='text'
                    className='grow'
                    placeholder='John Doe'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <label className='input input-bordered flex items-center gap-2'>
                  Email
                  <input
                    type='text'
                    className='grow'
                    placeholder='user@site.com'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                <div className='pt-6'>
                  <textarea
                    placeholder='Description of Issue'
                    className='textarea textarea-bordered textarea-lg w-full'
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className='pt-6'>
                  <AccentButton/>
                </div>
              </form>
              
            </div>
          </dialog>
        </div>
        
      </div>
      <ToastContainer autoClose={2500} position={'top-center'}/>
    </div>
  );
};

export default TicketCard;
