import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-20'>
      <nav className='relative container mx-auto flex  items-center justify-between py-4 px-2 '>
        <div>
          <h4 className='text-xl font-semibold'>Taste</h4>
          <span className='text-[0.65rem] font-bold opacity-70'>
            Restaurant & BBQ
          </span>
        </div>
        <div className='cursor-pointer flex items-center justify-center w-10 h-12 bg-black rounded-t-xl rounded-br-3xl relative'>
          <AiOutlineShoppingCart className='text-white text-xl' />
          <div className='absolute  w-4 h-4 text-[0.65rem] flex items-center justify-center  right-1 top-1  bg-red-500 text-sm rounded-full'>
            6
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
