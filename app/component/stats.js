function StatP({number, atribute}){
    return(<>
    <div className="flex flex-col items-center md:p-4">
<div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
{number}
</div>
<div className="text-sm font-semibold sm:text-base">{atribute}</div>
</div>
    </>

    )}


export default function Stats(){
    return(
        <>

         {/* stats - start */}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="mx-auto max-w-screen-xl px-4 md:px-8">
      {/* text - start */}
      <div className="mb-10 md:mb-16">
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
          Our Team by the numbers
        </h2>
        <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
          This is a section of some simple filler text, also known as
          placeholder text. It shares some characteristics of a real written
          text but is random or otherwise generated.
        </p>
      </div>
      {/* text - end */}
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
        {/* stat - start */}
        <StatP number={`200 `} atribute={"People"} />

        {/* stat - end */}
        {/* stat - start */}
        <StatP number={`500 +`} atribute={"People"} />

        {/* stat - start */}
        <StatP number={`1000 +`} atribute={"People"} />
        {/* stat - end */}
        {/* stat - start */}
<StatP number={" A couple"} atribute={" Coffee breaks"}/>
        {/* stat - end */}
      </div>
    </div>
  </div>
  {/* stats - end */}
        </>
    )
}