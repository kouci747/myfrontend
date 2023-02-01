import React from 'react';
import Image from 'next/image';

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] aspect-auto">
      <Image src="/algerie.jpg" fill />

      <div className="absolute top-1/2 w-full text-center  ">
        <p className="text-3xl text-white  font-extrabold font-mono ">
          Cherchez parmi plus de 100.000 logements
        </p>
        <button className="border-2 rounded-full  text-white px-10 py-3 border-l-red-400  border-none shadow-lg font-bold bg-red-400 hover:shadow-xl active:scale-90 transition duration:100">
          Explorer
        </button>
      </div>
    </div>
  );
}

export default Banner;
