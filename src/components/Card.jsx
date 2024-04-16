import React from 'react';
import AccentButton from './AccentButton';
const Card = () => {
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
          <dialog id='my_modal_3' className='modal'>
            <div className='modal-box'>
              <form method='dialog'>
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                  ✕
                </button>
              </form>
              <h3 className='font-bold text-lg'>Hello!</h3>
              <label className='input input-bordered flex items-center gap-2'>
                Name
                <input type='text' className='grow' placeholder='Daisy' />
              </label>
              <label className='input input-bordered flex items-center gap-2'>
                Email
                <input
                  type='text'
                  className='grow'
                  placeholder='daisy@site.com'
                />
              </label>
              <div className="pt-6">
              <textarea placeholder="Description of Issue" className="textarea textarea-bordered textarea-lg w-full  " ></textarea>
              </div>
              <div className="pt-6">
                <AccentButton/>
              </div>
              
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Card;
