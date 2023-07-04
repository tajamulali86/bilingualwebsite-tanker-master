import Image from "next/image"
import img1 from "../../public/watertanker1.png"
import img2 from "../../public/watertanker2.png"
export default function TwoService(){
    return(
        <>
        <section className="text-gray-600 body-font bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -mb-10 text-center">
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={img1}
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
          Water Tanker 1
        </h2>
        <p className="leading-relaxed text-base">
          28000 liters of fresh Water, along with water pump for faster filling.
        </p>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Click to book now.
        </button>
      </div>
      <div className="sm:w-1/2 mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image
            alt="content"
            className="object-cover object-center h-full w-full"
            src={img2}
          />
        </div>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
 Water Tanker 2        </h2>
        <p className="leading-relaxed text-base">
         38000 liters of normal potable water for swimming and other purposes with motor.
        </p>
        <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
          Click to Book now
        </button>
      </div>
    </div>
  </div>
</section>
</>
    )
}