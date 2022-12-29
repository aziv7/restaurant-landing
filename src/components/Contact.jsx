import React from 'react';

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='border-solid border-black border-b pb-8 flex justify-between items-end gap-4 flex-wrap '>
        <div>
          <div className='uppercase'>Lets talk</div>
          <div className='text-3xl font-bold'>want to reserve a table?</div>
        </div>
        <div className='btn'>
          <a href=''>Contact us</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
