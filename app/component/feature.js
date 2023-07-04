
function FeautreP({title, para}){
    return(<>
            <div className="flex gap-4 md:gap-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold md:text-xl">{title}</h3>
            <p className="mb-2 text-gray-500">
             {para}
            </p>
            <a
              href="#"
              className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a>
          </div>
        </div>
            </>
        
     )}

export default function Features(){
    return(
 <>
 <div className="bg-white py-6 sm:py-8 lg:py-12">
 <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   {/* text - start */}
   <div className="mb-10 md:mb-16">
     <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
       Our competitive advantage
     </h2>
     <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
       This is a section of some simple filler text, also known as
       placeholder text. It shares some characteristics of a real written
       text but is random or otherwise generated.
     </p>
   </div>
   {/* text - end */}
   <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
     {/* feature - start */}
     <FeautreP title={"Security"} para={" Filler text is dummy text which has no meaning however looks very similar to real text."} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
     {/* feature - end */}
     {/* feature - start */}
     <FeautreP title={"Security"} para={"Filler text is dummy tezt whcih has no meaning hower loos very similar to rel text."} />
     {/* feature - end */}
   </div>
 </div>
</div></>


    )
}