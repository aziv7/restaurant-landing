import React from 'react';
import { footerSocials } from '../Data';
import { mainMenu } from '../Data';
import { explores } from '../Data';
import { footerContacts } from '../Data';
import { payements } from '../Data';

const Footer = () => {
  return (
    <div className='section'>
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mb-8'>
        <div>
          {' '}
          <div className='text-xl font-semibold mb-4'>Foodzone</div>
          <p className='mb-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            tempora tempore unde molestias fugiat perspiciatis quam ea, culpa
            aperiam temporibus!
          </p>
          <div className='flex items-center gap-4'>
            <span>Follow Us</span>
            <div className='h-[2px] w-12 bg-black'></div>
            {footerSocials.map((social, ind) => (
              <div key={ind}>{social}</div>
            ))}
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2 gap-8'>
          <div>
            <h3 className='font-semibold text-[1.1rem] mb-4'>Main menu</h3>
            {mainMenu.map((item, index) => (
              <div key={index} className='mb-2'>
                <a href={`#${item.href}`}>{item.text} </a>
              </div>
            ))}
          </div>
          <div>
            <h3 className='font-semibold text-[1.1rem] mb-4'>Explore</h3>
            {explores.map((item, index) => (
              <div key={index} className='mb-2'>
                <a href={`#`}>{item} </a>
              </div>
            ))}
          </div>
          <div>
            <h3 className='font-semibold text-[1.1rem] mb-4'>Contact</h3>
            {footerContacts.map((item, index) => (
              <div key={index} className='flex items-center gap-4 mb-4'>
                <div className='text-xl'>{item.icon} </div>
                <div className=''>{item.text} </div>{' '}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-between gap-4 pb-8'>
        <div>
          Copyright &#169; <span className='font-bold'>Aziz Jerbi</span>.All
          rights reserved.{' '}
        </div>
        <div className='flex gap-2'>
          {payements.map((payment, index) => (
            <div key={index}>
              <img src={payment} className='w-10' alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
