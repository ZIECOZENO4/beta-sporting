'use client'
import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import { useUser } from '@clerk/clerk-react';

function Phone3() {
  const [isChecked, setIsChecked] = useState(false);
  const { user } = useUser();
  const handleClick = () => {
    if (!user) {
      // User is not logged in, show a message or redirect them to the login page
      alert('Please log in first');
      return;
    }
  
    setIsChecked(!isChecked);
    
  };
  return (
    <div>  
        <div className=' bg-slate-300 text-black w-full overflow-hidden'>
    <div className=' h-[2px] w-full bg-black' />
    <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>User Name</h1>
      <div className=' flex justify-between '>
      <input
         type="text"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder=" "
         required
       />
 </div>
      </div>
      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>First Name</h1>
      <div className=' flex justify-between text-green-600 text-[20px] '>
        {user ? user.firstName : (
          <input
            type="text"
            className="peer h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            required
          />
        )}
      </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Last Name</h1>
       <div className=' flex justify-between text-green-600 text-[20px] '>
        {user ? user.firstName : (
          <input
            type="text"
            className="peer h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            required
          />
        )}
      </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Middle Name</h1>
      <div className=' flex justify-between '>
      <input
         type="text"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder=" "
         required
       />
     </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Date of Birth</h1>
      <div className=' flex justify-between '>
      <input
         type="number"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder="your date of birth "
         required
       />
     </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Phone Number</h1>
      <div className=' flex justify-between '>
      <input
         type="number"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder="  "
         required
       />
     </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Email</h1>
      <div className=' flex justify-between text-green-600 text-[20px] '>
      {user ? user.emailAddresses[0].emailAddress : (
         <input
           type="email"
           className="peer h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
           placeholder=" "
           required
         />
       )}
      </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Address</h1>
      <div className=' flex justify-between '>
      <input
         type="text"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder=" "
         required
       />
     </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>City</h1>
      <div className=' flex justify-between '>
      <input
         type="text"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder=" "
         required
       />
     </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Country</h1>
      <div className=' flex justify-between '>
      <input
         type="text"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder="  "
         required
       />
     </div>
      </div>

      <div className=' h-[3px] w-full bg-black' />
      <div className=' m-2 px-2 flex justify-between'>
      <h1 className=' text-[20px] font-header'>Short Bio</h1>
      <div className=' flex justify-between '>
      <input
         type="text"
         className="peer  h-[40px] w-[100px] rounded-[7px] border border-blue-gray-200 bg-transparent px-2 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-green-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
         placeholder="  "
         required
       />
     </div>
      </div>
    </div>
   <div className=' m-4 flex justify-between'>
<div className=' flex flex-col justify-items-center'>
<button 
     onClick={handleClick} 
     className={`item-center middle none center flex justify-center rounded-lg ${isChecked ? 'bg-pink-500' : 'bg-red-500'} p-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`} 
     data-ripple-light="true" 
     style={{ position: 'relative', overflow: 'hidden' }}
   >
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />
</svg>

   </button>
   <Link href='/' className=' my-1 text-white hover:text-green-500'>Accept our terms</Link>
</div>
<div>
<button
         className=" right-1  w-[60px] h-[40px]  select-none rounded bg-green-700 py-2 px-2  text-center align-middle font-sans text-[10px] font-bold uppercase text-white shadow-md shadow-green-300 transition-all hover:shadow-lg hover:shadow-green-500 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
         type="button"
         data-ripple-light="true"
       >
         Save
       </button>
</div>
   </div>
       </div>
       
  )
}

export default Phone3