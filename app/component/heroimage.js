import React from 'react'
import bg from "@/public/watertanker1.png"

export default function HeroImage({ar=false}) {
  return (
    <>
    {ar==false?
    <>
    <div className='w-full h-96 bg-[url("/hero.jpeg")] bg-cover bg-center flex justify-center items-center'>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-center text-5xl text-white font-bold drop-shadow-lg">
          WELCOME TO <br/>          <span className="text-amber-500"> Sweet Water Supply</span>
        </h1>
        <p className="mt-5 text-center text-lg  ">
          24/7 water tanker service 
        </p>
        <a
          className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
          href="#"
        >
          Book Now
        </a>
      </div>
    </div>
   
  </>
  
    :
    <>"arabic"</>
    }
    </>
  )
}
