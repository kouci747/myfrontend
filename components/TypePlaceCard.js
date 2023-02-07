import React from 'react';
import Image from 'next/image';

function typePlaceCard({ name, thumbnail }) {
  return (
    <div className="hover:bg-gray-200 hover:scale-105 active:scale-90 transition duration:100 rounded-lg w-20 h-20">
      {/*coté haut */}
      <div className="relative h-20 w-20">
        <Image src={thumbnail} fill className="rounded-xl" />
      </div>
      {/* coté bas */}

      <div className="">
        <div className=" relative flex items-center  ">
          <h4 className="text-xs">{name}</h4>
        </div>
      </div>
    </div>
  );
}

export default typePlaceCard;
