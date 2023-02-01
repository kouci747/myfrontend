import React from 'react';
import Image from 'next/image'; //outil de next qui compresse les images au format webp(gain de perf)
import { SearchIcon } from '@heroicons/react/solid';
//la balise <header> améliore le référencement

function Header() {
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
      <div>
        <input type="text" placeholder="recherchez sur Airbnb..." />
        <SearchIcon className="h-8 bg-red-400 text-white rounded-full p-1 cursor-pointer" />
      </div>
      <div>right</div>
    </header>
  );
}

export default Header;
