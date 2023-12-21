'use client'
import { NextApiResponse, NextPageContext } from 'next';
import './globals.css'
function Error({ statusCode }: { statusCode: number }) {
  return (
    <div>

<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                        <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
                            <p className="my-2 text-gray-800">Sorry about that! Please Contact our Beta developers.</p>
                            <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">I have an issue</button>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
    </div>
  
  );
}

Error.getInitialProps = ({ res, err }: { res: NextApiResponse | null, err: NextPageContext["err"] }) => {
  const statusCode = res ? res.statusCode : 404;
  return { statusCode };
};

export default Error;