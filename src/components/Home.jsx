import React from 'react';
import hero from '../assets/hero.png';
import { FaArrowRight } from 'react-icons/fa';
import { heroIcons } from '../Data';

const Home = () => {
  return (
    <div
      className='section flex items-center xl:justify-center justify-start flex-wrap'
      id='home'>
      <div className='flex flex-col items-start gap-10'>
        <div className='sm:text-[2.5rem] text-[1.8rem] font-bold'>
          <p>Delicious </p> <p>food is Waiting</p> <p>For you</p>
        </div>
        <div className='btn'>
          <a href=''>View Menu</a>
          <FaArrowRight />
        </div>
        <div className='flex md:gap-6 gap-2'>
          {heroIcons.map((icon, ind) => (
            <div
              className='rounded-lg text-xl md:text-3xl flex items-center justify-center bg-black w-12 h-12 text-white'
              key={ind}>
              {icon}
            </div>
          ))}
        </div>{' '}
      </div>
      <div className='min-w-[200px] md:w-[600px] justify-self-center'>
        <img src={hero} alt='hero picture' s />
      </div>
    </div>
  );
};

export default Home;
