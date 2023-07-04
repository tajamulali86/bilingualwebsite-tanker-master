import Image from "next/image";
import logo from "@/public/logo.png"
import Link from "next/link";


export default function Header({ ar }) {
  

  return (<>
    {
    ar == true ? 
     <> <header className="text-gray-600 body-font" dir="rtl" >
     <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
         <Image
           src={logo}
           height={50} />
         <span className="ml-3 text-xl">وايت ماء شمال الرياض
</span>
       </a>
       <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
         <Link href={'/ar'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">بيت
</button></Link>
         <Link href={'/ar/about'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">معلومات عنا
</button></Link>
         <Link href={'/ar/services'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">خدماتنا
</button></Link>
         <Link href={'/ar/contact'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">اتصل بنا
</button></Link>


       </nav>
       <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

       </nav>
       <Link href={'/'}> <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
         English

         {/* <svg
           fill="none"
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           className="w-4 h-4 ml-1"
           viewBox="0 0 24 24"
         >
           <path d="M5 12h14M12 5l7 7-7 7" />
         </svg> */}
       </button></Link>
     </div>
   </header></>
      :
      <header className="text-gray-600 body-font"  >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={logo}
              height={50} />
            <span className="ml-3 text-xl">Sweet Water Supply</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Home</button></Link>
            <Link href={'/about'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">About us</button></Link>
            <Link href={'/services'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Our Services</button></Link>
            <Link href={'/contact'}> <button className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Contact Us</button></Link>


          </nav>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

          </nav>
          <Link href={'/ar'}> <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            عربي

            {/* <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg> */}
          </button></Link>
        </div>
      </header>}</>
  );
}