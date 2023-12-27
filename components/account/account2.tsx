import Link from 'next/link'

const UserProfile = () => {
  return (
    <div className="mx-[10px] ml-[20px] right-0 mt-4 w-70">
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <svg aria-hidden="true" role="img" className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
            <path fill="currentColor" d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"></path>
          </svg>
          <p className="pt-2 text-lg font-semibold text-gray-50"> ZIECO ZENO</p>
          <p className="text-sm text-gray-100">ziecozeno4@gmail.com</p>
          <div className="mt-5">
            <h1 className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Manage your Account
            </h1>
          </div>
        </div>
        <div className="border-b">
          <Link href="/account/transactions">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-green-600">
              <svg fill="#000000" height="20px" width="20px" version="1.1" id="XMLID_86_" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="transaction"> <path d="M11,23.4L1.3,17l9.7-6.4V14h13v6H11V23.4z M4.7,17L9,19.9V18h13v-2H9v-1.9L4.7,17z M13,13.4V10H0V4h13V0.6L22.7,7L13,13.4z M2,8h13v1.9L19.3,7L15,4.2V6H2V8z"></path> </g> </g></svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-100 leading-none hover:text-gray-900">
                  Transactions
                </p>
                <p className="text-xs text-gray-500">View your Transactions</p>
              </div>
            </div>
          </Link>
          <Link href="/account/bethistory">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-100">
               <svg width="20px" height="20px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs>  </defs> <g data-name="Layer 2" id="Layer_2"> <g data-name="E425, History, log, manuscript" id="E425_History_log_manuscript"> <path className="cls-1" d="M75.11,117h0A21.34,21.34,0,0,1,53.83,95.57V31.39A21.34,21.34,0,0,1,75.11,10h0A21.34,21.34,0,0,1,96.39,31.39V95.57A21.34,21.34,0,0,1,75.11,117Z"></path> <rect className="cls-1" height="64.17" width="319.22" x="96.39" y="31.39"></rect> <rect className="cls-1" height="320.87" width="319.22" x="96.39" y="95.57"></rect> <path className="cls-1" d="M34.34,39.08H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,63.54v-.13A24.34,24.34,0,0,1,34.34,39.08Z"></path> <path className="cls-1" d="M436.89,117h0a21.34,21.34,0,0,0,21.28-21.39V31.39A21.34,21.34,0,0,0,436.89,10h0a21.34,21.34,0,0,0-21.28,21.39V95.57A21.34,21.34,0,0,0,436.89,117Z"></path> <path className="cls-1" d="M482.51,39.08H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z" transform="translate(960.17 126.96) rotate(-180)"></path> <path className="cls-1" d="M75.11,395h0a21.34,21.34,0,0,0-21.28,21.39v64.18A21.34,21.34,0,0,0,75.11,502h0a21.34,21.34,0,0,0,21.28-21.39V416.43A21.34,21.34,0,0,0,75.11,395Z"></path> <rect className="cls-1" height="64.17" width="319.22" x="96.39" y="416.43"></rect> <path className="cls-1" d="M34.34,424.12H53.83a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H34.34A24.34,24.34,0,0,1,10,448.58v-.13A24.34,24.34,0,0,1,34.34,424.12Z"></path> <path className="cls-1" d="M436.89,395h0a21.34,21.34,0,0,1,21.28,21.39v64.18A21.34,21.34,0,0,1,436.89,502h0a21.34,21.34,0,0,1-21.28-21.39V416.43A21.34,21.34,0,0,1,436.89,395Z"></path> <path className="cls-1" d="M482.51,424.12H502a0,0,0,0,1,0,0v48.8a0,0,0,0,1,0,0H482.51a24.34,24.34,0,0,1-24.34-24.34v-.13a24.34,24.34,0,0,1,24.34-24.34Z" transform="translate(960.17 897.04) rotate(-180)"></path> <line className="cls-1" x1="143.41" x2="256" y1="140.11" y2="140.11"></line> <line className="cls-1" x1="143.41" x2="371.26" y1="186.47" y2="186.47"></line> <line className="cls-1" x1="143.41" x2="371.26" y1="232.82" y2="232.82"></line> <line className="cls-1" x1="143.41" x2="371.26" y1="279.18" y2="279.18"></line> <line className="cls-1" x1="143.41" x2="371.26" y1="325.53" y2="325.53"></line> <line className="cls-1" x1="256" x2="371.26" y1="371.89" y2="371.89"></line> </g> </g> </g></svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-100 leading-none">Bet History</p>
                <p className="text-xs text-gray-500">View your last Bet History</p>
              </div>
            </div>
          </Link>

          <Link href="/account/deposit">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-100">
              <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="11. Phone" id="_11._Phone"> <path d="M14,6a1,1,0,0,0,0-2H8A1,1,0,0,0,8,6Z"></path> <path d="M21,8.84v-4A4.8,4.8,0,0,0,16.21,0H5.79A4.8,4.8,0,0,0,1,4.79V27.21A4.8,4.8,0,0,0,5.79,32H16.21A4.8,4.8,0,0,0,21,27.21v-.05A10,10,0,0,0,21,8.84ZM16.21,30H5.79A2.79,2.79,0,0,1,3,27.21V4.79A2.79,2.79,0,0,1,5.79,2H16.21A2.79,2.79,0,0,1,19,4.79V8.2A10.2,10.2,0,0,0,17,8a9.92,9.92,0,0,0-7,2.89V10a1,1,0,0,0-2,0V26a1,1,0,0,0,2,0v-.89A9.92,9.92,0,0,0,17,28a10.19,10.19,0,0,0,1.93-.19A2.79,2.79,0,0,1,16.21,30ZM17,26a8,8,0,0,1-7-4.14V14.14A8,8,0,1,1,17,26Z"></path> <path d="M17,15h2a1,1,0,0,0,0-2H18a1,1,0,0,0-2,0v.18A3,3,0,0,0,17,19a1,1,0,0,1,0,2H15a1,1,0,0,0,0,2h1a1,1,0,0,0,2,0v-.18A3,3,0,0,0,17,17a1,1,0,0,1,0-2Z"></path> <path d="M30,5H27.41l.3-.29a1,1,0,1,0-1.42-1.42l-2,2a1,1,0,0,0,0,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L27.41,7H30a1,1,0,0,0,0-2Z"></path> </g> </g></svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-100 leading-none">Deposit</p>
                <p className="text-xs text-gray-500">View your Deposits</p>
              </div>
            </div>
          </Link>

          <Link href="/account/withdraw">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
              <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> <defs> 
     </defs> <g id="withdrawl_dollar" data-name="withdrawl dollar"> <path className="cls-1" d="M10.09,16.77h2.39a1.43,1.43,0,0,0,1.43-1.43h0a1.43,1.43,0,0,0-1.43-1.43h-1a1.43,1.43,0,0,1-1.43-1.43h0a1.43,1.43,0,0,1,1.43-1.43h2.39"></path> <line className="cls-1" x1="12" y1="9.14" x2="12" y2="11.05"></line> <line className="cls-1" x1="12" y1="16.77" x2="12" y2="18.68"></line> <polygon className="cls-1" points="22.5 1.5 22.5 11.04 17.73 11.04 17.73 6.27 6.27 6.27 6.27 11.04 1.5 11.04 1.5 1.5 22.5 1.5"></polygon> <line className="cls-1" x1="6.27" y1="6.27" x2="17.73" y2="6.27"></line> <rect className="cls-1" x="6.27" y="6.27" width="11.45" height="16.23"></rect> <line className="cls-2" x1="4.36" y1="6.27" x2="19.64" y2="6.27"></line> </g> </g></svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-100 leading-none">Withdraw</p>
                <p className="text-xs text-gray-500">View your Withdraws</p>
              </div>
            </div>
          </Link>

          <Link href="/account/promotions">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
              <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  width="20px" height="20px" viewBox="0 0 256 246" enable-background="new 0 0 256 246" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M254,150.588v93.343H53.545v-31.916h64.591v-28.727h60.744v-32.7H254z M113.175,18.875c0,9.282,7.524,16.806,16.806,16.806 s16.806-7.524,16.806-16.806s-7.524-16.806-16.806-16.806S113.175,9.593,113.175,18.875z M189.915,100.17 c-1.62,3.746-6.074,5.264-9.82,3.543l-31.182-14.68c-1.822-0.81-3.341-2.43-3.948-4.353L139.7,69.798l-7.289,36.463l24.593,0.506 c5.264,0.101,9.415,4.556,9.314,9.82l-1.316,50.999c-0.101,5.264-4.454,9.415-9.618,9.415c0,0-0.101,0-0.203,0 c-5.366-0.101-9.516-4.556-9.415-9.82l1.114-41.483l-30.668-0.709l-7.087,35.113c-0.304,1.417-0.911,2.936-1.721,4.151 l-26.224,37.721c-3.341,4.859-9.82,5.872-14.68,2.531c-4.758-3.341-5.872-9.82-2.43-14.579l24.908-35.494l15.963-90.455 L73.183,93.305c-0.556,0.513-1.173,0.919-1.823,1.224l2.972,2.972l-8.68,8.68l14.466,14.466L68.545,132.22L22.253,85.927 l11.573-11.573l14.466,14.466l8.68-8.68l4.843,4.842c0.369-0.79,0.883-1.527,1.553-2.164l39.78-37.769 c5.25-4.518,13.672-7.244,20.962-6.029l6.884,1.316c9.213,1.62,16.299,7.897,19.236,16.097l7.492,20.552l28.448,13.364 C189.915,91.97,191.535,96.424,189.915,100.17z M67.099,97.501L56.972,87.374l-5.063,5.063l10.127,10.127L67.099,97.501z M56.972,126.433l-2.893,2.893l-5.786-5.787l2.893-2.893l-17.36-17.36l-2.893,2.893l-5.787-5.787l2.893-2.893l-8.68-8.68L2,106.18 l46.293,46.293l17.36-17.36L56.972,126.433z"></path> </g></svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-100 leading-none">Promotions</p>
                <p className="text-xs text-gray-500">View your Promotions</p>
              </div>
            </div>
          </Link>

          <Link href="/account/gift">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
              <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 406.215 406.215" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M226.793,243.186v163.029h134.115c17.431,0,31.568-14.129,31.568-31.57V243.186H226.793z"></path> <path d="M179.374,243.186H13.749v131.459c0,17.441,14.141,31.57,31.57,31.57h134.055V243.186z M56.788,373.086 c-6.545,0-11.855-5.311-11.855-11.854v-65.778c0-6.544,5.311-11.854,11.855-11.854s11.855,5.312,11.855,11.854v65.778 C68.643,367.775,63.333,373.086,56.788,373.086z"></path> </g> <path d="M371.176,119.564h-59.293c8.184-3.928,15.049-7.986,19.2-12.133c24.423-24.419,24.423-64.03,0-88.453 C318.857,6.768,302.85,0.664,286.844,0.664c-16.009,0-32.019,6.104-44.229,18.314c-10.141,10.144-19.897,35.182-27.862,60.983 c-3.72-1.021-7.549-1.736-11.577-1.736c-4.014,0-7.844,0.716-11.547,1.729c-7.996-26.034-17.844-51.412-28.08-61.641 C151.338,6.103,135.346,0,119.322,0c-16.008,0-32.016,6.104-44.227,18.313c-24.422,24.432-24.422,64.035,0,88.453 c4.369,4.388,11.73,8.679,20.562,12.798H35.038c-17.43,0-31.553,14.128-31.553,31.556v26.852c0,17.43,14.123,31.551,31.553,31.551 h144.336v-88.707h47.419v88.707h144.384c17.428,0,31.553-14.123,31.553-31.552v-26.852 C402.729,133.692,388.604,119.564,371.176,119.564z M264.971,41.332c5.834-5.838,13.612-9.057,21.873-9.057 c8.272,0,16.039,3.219,21.891,9.057c5.834,5.841,9.045,13.607,9.045,21.873s-3.211,16.031-9.016,21.835 c-6.531,6.161-32.107,15.76-63.725,24.701c-0.894-3.066-2.101-5.967-3.627-8.716C250.026,71.272,259.073,47.567,264.971,41.332z M97.448,40.668c5.836-5.834,13.615-9.053,21.875-9.053c8.273,0,16.039,3.211,21.857,9.037 c5.945,6.291,15.098,30.303,23.773,60.365c-1.436,2.577-2.576,5.296-3.473,8.158c-31.768-8.952-57.502-18.6-64.033-24.758 C85.391,72.353,85.391,52.732,97.448,40.668z"></path> </g> </g> </g></svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-100 leading-none">Gift</p>
                <p className="text-xs text-gray-500">View your Gifts from Beta</p>
              </div>
            </div>
          </Link>

          <Link href="/account/setting">
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
              <svg width="20px" height="20px" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><path className="cls-1" d="M39.23,26a16.52,16.52,0,0,0,.14-2,16.52,16.52,0,0,0-.14-2l4.33-3.39a1,1,0,0,0,.25-1.31l-4.1-7.11a1,1,0,0,0-1.25-.44l-5.11,2.06a15.68,15.68,0,0,0-3.46-2l-.77-5.43a1,1,0,0,0-1-.86H19.9a1,1,0,0,0-1,.86l-.77,5.43a15.36,15.36,0,0,0-3.46,2L9.54,9.75a1,1,0,0,0-1.25.44L4.19,17.3a1,1,0,0,0,.25,1.31L8.76,22a16.66,16.66,0,0,0-.14,2,16.52,16.52,0,0,0,.14,2L4.44,29.39a1,1,0,0,0-.25,1.31l4.1,7.11a1,1,0,0,0,1.25.44l5.11-2.06a15.68,15.68,0,0,0,3.46,2l.77,5.43a1,1,0,0,0,1,.86h8.2a1,1,0,0,0,1-.86l.77-5.43a15.36,15.36,0,0,0,3.46-2l5.11,2.06a1,1,0,0,0,1.25-.44l4.1-7.11a1,1,0,0,0-.25-1.31ZM24,31.18A7.18,7.18,0,1,1,31.17,24,7.17,7.17,0,0,1,24,31.18Z"></path></g></svg>
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-100 leading-none">Security</p>
                <p className="text-xs text-gray-500">Set up strong security</p>
              </div>
            </div>
          </Link>
        </div>
                 <div className="">
                        <Link href="#" className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex bg-red-700 ">
                            <p className="text-sm font-medium text-gray-800 leading-none"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="h-4 w-4 text-gray-800 fill-current animate-spin" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"></path></svg> Logout
                                    </p>
                        </Link>
                    </div>
                </div>
            </div>
  );
}
export default  UserProfile;