import React from 'react';
import { recipes } from '../Data';

const Recipe = () => {
  return (
    <div className='section' id='recipe'>
      <div className='flex flex-col items-center'>
        <div className='text-3xl text-center font-bold mb-16'>
          Hot Selling Recipes
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          {recipes.map((recipe) => (
            <div
              className='p-4 shadow-lg hover:shadow transition-all cursor-pointer duration-300 '
              key={recipe.id}>
              <img src={recipe.image} className='rounded-lg mb-4' alt='' />
              <div className='flex mb-4 items-center justify-between'>
                <div className='md:text-xl font-semibold text-[1rem]'>
                  {recipe.name}{' '}
                </div>
                <div className='flex items-center gap-3'>
                  <button>-</button>
                  <span className='text-[0.85rem]'></span>
                  <button>+</button>
                </div>
              </div>

              <p className='text-[0.85rem] opacity-70 mb-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt
                accusantium, tempora tenetur perferendis quam voluptatem
                deserunt quod saepe quasi itaque impedit necessitatibus ab quas
                veritatis earum sed nesciunt! Ullam, quaerat.
              </p>
              <div className='flex items-center justify-between'>
                <span>{recipe.price} </span>
                <span className='btn cursor-pointer p-3'>Add to cart</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
