import React from 'react';
import Image from 'next/image';
import { HeartIcon, StarIcon } from '@heroicons/react/outline';

function InfoCard({ title, pricing, images, address, description }) {
  return (
    // <div className="flex">
    //   <div className="relative h-24 w-40 md:h-52 md:w-80">
    //     <Image src={images} fill className="rounded-xl" />
    //     <h3 className="text-xs">{pricing} $ / nuit </h3>
    //   </div>
    //   <div className="flex flex-col grow pl-5">
    //     <div className="flex justify-between">
    //       <p>place's location </p>
    //       <HeartIcon className="h-7" />
    //     </div>
    //   </div>
    // </div>
    <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg  active:scale-90 transition duration:100">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
        <Image src={images} fill className="rounded-xl" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{title}</p>
          <h4 className="text-xs">{address}</h4>

          <HeartIcon className="h-4 cursor-pointer" />
        </div>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-frey-500 flex-grow">{description}</p>
        <div className="flex justify-between">
          <p className="flex items-center">
            <StarIcon className="h-4 cursor-pointer" />
          </p>

          <p className="font-semibold">{pricing} $/nuit</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
