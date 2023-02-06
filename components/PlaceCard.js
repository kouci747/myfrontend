import React from 'react';
import Image from 'next/image';

function PlaceCard({ title, images, pricing, capacity, address }) {
  return (
    <div className="hover:bg-gray-200 hover:scale-105 active:scale-90 transition duration:100 rounded-lg w-56 h-80">
      {/*coté haut */}
      <div className="relative h-56 w-56">
        <Image src={images} fill className="rounded-xl" />
      </div>
      {/* coté bas */}

      <div className="">
        <h2>{address}</h2>
        <div className=" relative flex items-center  ">
          <h3 className="text-xs">{pricing} $ / nuit </h3>
          <h4 className="text-xs">capacité :{capacity}</h4>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
