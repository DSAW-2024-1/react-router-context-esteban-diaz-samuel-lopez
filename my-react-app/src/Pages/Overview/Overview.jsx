import React from 'react';
import { useMediaQuery } from '@mui/material';
import { Navigation1 } from '../../Components/Navigation-menus/Navigation1';
import { Navigation2 } from '../../Components/Navigation-menus/Navigation2';

const Overview = () => {
  // Utiliza useMediaQuery para detectar el tamaño de la pantalla
  const isLargeScreen = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="p-3 dark:bg-gray-900 w-screen h-screen flex ">
 
      {isLargeScreen && (
        <>
          <div className="flex-none">
            <Navigation2 />
          </div>
          <div className="flex justify-center flex-1">
            <h1 className="text-3xl font-bold underline dark:text-white">Overview!</h1>
          </div>
        </>
      )}

      {!isLargeScreen && (
        <>
          <div className='flex flex-col w-screen'>
          <div className="flex-none">
            <Navigation1 />
          </div>
          <div className="flex justify-center itemns-center">
            <h1 className="text-3xl font-bold underline dark:text-white">Overview!</h1>
          </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Overview;
