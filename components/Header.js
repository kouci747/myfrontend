import React from 'react';
import Image from 'next/image'; //outil de next qui compresse les images au format webp(gain de perf)
import {
  SearchIcon,
  UserCircleIcon,
  HomeIcon,
  MenuIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-date-range/dist/defaultRanges';
import { DateRangePicker } from 'react-date-range';
//la balise <header> améliore le référencement

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  //console.log(searchInput);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-2 px-2 md:py-1">
      <div>
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            src="https://links.papareact.com/qd3"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex items-center border-2 rounded-full pl-5 text-gray-700 ">
        <input
          className="flex-grow bg-transparent outline-none text-sm "
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="recherchez sur Airbnb..."
        />
        <SearchIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer" />
      </div>
      <div className=" flex items-center space-x-2 justify-end text-gray-400 text-sm ">
        <p className="hidden md:inline">Mettre mon logement sur Airbnb</p>
        <HomeIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer " />

        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <UserCircleIcon className="hidden md:inline-flex h-6 bg-red-400 text-white rounded-full p-1 cursor-pointer " />
          <MenuIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B60']} //orange rosé caractéristique d'AIRBNB
          />
        </div>
      )}
    </header>
  );
}

export default Header;
