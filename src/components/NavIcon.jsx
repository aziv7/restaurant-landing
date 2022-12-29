import React from 'react';
import { mainMenu } from '../Data';
import { RxDashboard } from 'react-icons/rx';
import { useState } from 'react';
const NavIcon = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className={`fixed w-full flex justify-center z-20 bottom-8 transition-all duration-400 ${
          toggle === false ? 'scale-0 opacity-0' : 'scale-1 opacity-1'
        } `}>
        <div className='flex sm:gap-8 gap-6  bg-black rounded-xl py-2 px-4'>
          {mainMenu.map((subitem) => (
            <div
              className='cursor-pointer p-2 rounded-full bg-glass'
              key={subitem.id}>
              <a className='text-xl text-white'>{subitem.icon} </a>
            </div>
          ))}
        </div>
      </div>
      <div className='fixed right-0 top-[30%] p-1  rounded-md z-20 bg-black cursor-pointer'>
        <RxDashboard
          onClick={() => setToggle(!toggle)}
          className='text-3xl text-white'
        />
      </div>
    </>
  );
};

export default NavIcon;
