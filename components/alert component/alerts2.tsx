
import React from 'react'

function AlertsMd() {
  return (
    <div className=' hidden md:flex flex-row mx-10 m-6 p-6 px-11'>
       <div className=' w-[60vw] '>
       <img
        src='/images/bsi.png'
        alt='note image'
        className='h-full w-[55vw] object-cover'
        />
       </div>
        <div className="flex flex-col w-[30vw]">
        <div className="flex items-center justify-between">
                        <p  className="focus:outline-none text-2xl font-semibold leading-6 text-gray-300">Notifications</p>
                        <button role="button" aria-label="close modal" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md cursor-pointer" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" className="w-4 h-4">
  <path d="M3.6 1.7A.75.75 0 1 0 2.4.799a6.978 6.978 0 0 0-1.123 2.247.75.75 0 1 0 1.44.418c.187-.644.489-1.24.883-1.764ZM13.6.799a.75.75 0 1 0-1.2.9 5.48 5.48 0 0 1 .883 1.765.75.75 0 1 0 1.44-.418A6.978 6.978 0 0 0 13.6.799Z" />
  <path fill-rule="evenodd" d="M8 1a4 4 0 0 1 4 4v2.379c0 .398.158.779.44 1.06l1.267 1.268a1 1 0 0 1 .293.707V11a1 1 0 0 1-1 1h-2a3 3 0 1 1-6 0H3a1 1 0 0 1-1-1v-.586a1 1 0 0 1 .293-.707L3.56 8.44A1.5 1.5 0 0 0 4 7.38V5a4 4 0 0 1 4-4Zm0 12.5A1.5 1.5 0 0 1 6.5 12h3A1.5 1.5 0 0 1 8 13.5Z" clip-rule="evenodd" />
</svg>

                        </button>
                    </div>

                    <div className="w-full p-3 mt-8 bg-white rounded flex">
                        <div aria-label="heart icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00059 3.01934C9.56659 1.61334 11.9866 1.66 13.4953 3.17134C15.0033 4.68334 15.0553 7.09133 13.6526 8.662L7.99926 14.3233L2.34726 8.662C0.944589 7.09133 0.997256 4.67934 2.50459 3.17134C4.01459 1.662 6.42992 1.61134 8.00059 3.01934Z" fill="#EF4444" />
                            </svg>
                        </div>
                        <div className="pl-3">
                            <p  className="focus:outline-none text-sm leading-none"><span className="text-indigo-700">Beta Sporting</span> Welcome: <span className="text-indigo-700">This is the home of sports</span></p>
                            <p  className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">Now</p>
                        </div>
                    </div>
                    <div className="w-full p-3 mt-4 bg-white rounded shadow flex flex-shrink-0">
                        <div aria-label="group icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.33325 14.6667C1.33325 13.2522 1.89516 11.8956 2.89535 10.8954C3.89554 9.89523 5.2521 9.33333 6.66659 9.33333C8.08107 9.33333 9.43763 9.89523 10.4378 10.8954C11.438 11.8956 11.9999 13.2522 11.9999 14.6667H1.33325ZM6.66659 8.66666C4.45659 8.66666 2.66659 6.87666 2.66659 4.66666C2.66659 2.45666 4.45659 0.666664 6.66659 0.666664C8.87659 0.666664 10.6666 2.45666 10.6666 4.66666C10.6666 6.87666 8.87659 8.66666 6.66659 8.66666ZM11.5753 10.1553C12.595 10.4174 13.5061 10.9946 14.1788 11.8046C14.8515 12.6145 15.2515 13.6161 15.3219 14.6667H13.3333C13.3333 12.9267 12.6666 11.3427 11.5753 10.1553ZM10.2266 8.638C10.7852 8.13831 11.232 7.52622 11.5376 6.84183C11.8432 6.15743 12.0008 5.41619 11.9999 4.66666C12.0013 3.75564 11.7683 2.85958 11.3233 2.06466C12.0783 2.21639 12.7576 2.62491 13.2456 3.2208C13.7335 3.81668 14.0001 4.56315 13.9999 5.33333C14.0001 5.80831 13.8987 6.27784 13.7027 6.71045C13.5066 7.14306 13.2203 7.52876 12.863 7.84169C12.5056 8.15463 12.0856 8.38757 11.6309 8.52491C11.1762 8.66224 10.6974 8.7008 10.2266 8.638Z"
                                    fill="#047857"
                                />
                            </svg>
                        </div>
                        <div className="pl-3 w-full">
                            <div className="flex items-center justify-between w-full">
                                <p  className="focus:outline-none text-sm leading-none"><span className="text-indigo-700">Zieco Zeno</span> Welcome: <span className="text-indigo-700">I hope we serve better</span></p>
                                <div  aria-label="close icon" role="button" className="focus:outline-none cursor-pointer">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.5 3.5L3.5 10.5" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.5 3.5L10.5 10.5" stroke="#4B5563" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <p  className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">Now</p>
                        </div>
                    </div>
                    <div className="w-full p-3 mt-4 bg-white rounded flex">
                        <div  aria-label="post icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.30325 12.6667L1.33325 15V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H13.9999C14.1767 2 14.3463 2.07024 14.4713 2.19526C14.5963 2.32029 14.6666 2.48986 14.6666 2.66667V12C14.6666 12.1768 14.5963 12.3464 14.4713 12.4714C14.3463 12.5964 14.1767 12.6667 13.9999 12.6667H4.30325ZM5.33325 6.66667V8H10.6666V6.66667H5.33325Z" fill="#4338CA" />
                            </svg>
                        </div>
                        <div className="pl-3">
                            <p className="focus:outline-none text-sm leading-none"><span className="text-indigo-700">Beta Sporting</span> Community: <span className="text-indigo-700">Meet Sports lovers like you</span></p>
                            <p className="focus:outline-none text-xs leading-3 pt-1 text-gray-500">Now</p>
                        </div>
                    </div>
                    <div className="w-full p-3 mt-4 bg-red-100 rounded flex items-center">
                        <div aria-label="storage icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-red-200 flex items-center flex-shrink-0 justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2V14C14 14.1768 13.9298 14.3464 13.8047 14.4714C13.6797 14.5964 13.5101 14.6667 13.3333 14.6667H2.66667C2.48986 14.6667 2.32029 14.5964 2.19526 14.4714C2.07024 14.3464 2 14.1768 2 14V2C2 1.82319 2.07024 1.65362 2.19526 1.5286C2.32029 1.40357 2.48986 1.33334 2.66667 1.33334H13.3333C13.5101 1.33334 13.6797 1.40357 13.8047 1.5286C13.9298 1.65362 14 1.82319 14 2ZM3.33333 10.6667V13.3333H12.6667V10.6667H3.33333ZM10 11.3333H11.3333V12.6667H10V11.3333Z" fill="#B91C1C" />
                            </svg>
                        </div>
                        <div className="pl-3 w-full flex items-center justify-between">
                            <p className="focus:outline-none text-sm leading-none text-red-700">Security alert: No threats</p>
                            <p  className="focus:outline-none text-xs leading-3 cursor-pointer underline text-right text-red-700">Manage</p>
                        </div>
                    </div>
                    <div className="w-full p-3 mt-8 bg-green-100 rounded flex items-center">
                        <div aria-label="success icon" role="img" className="focus:outline-none w-8 h-8 border rounded-full border-green-200 flex flex-shrink-0 items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66674 10.1147L12.7947 3.98599L13.7381 4.92866L6.66674 12L2.42407 7.75733L3.36674 6.81466L6.66674 10.1147Z" fill="#047857" />
                            </svg>
                        </div>
                        <div className="pl-3 w-full">
                            <div className="flex items-center justify-between">
                                <p  className="focus:outline-none text-sm leading-none text-green-700">Your authentication was successful</p>
                                <p className="focus:outline-none focus:text-indigo-600 text-xs leading-3 underline cursor-pointer text-green-700">View account</p>
                            </div>
                        </div>
                    </div>

        </div>
        
    </div>
  )
}

export default AlertsMd