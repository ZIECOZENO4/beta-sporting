// Import the 'react' library
import React from 'react';

// Define your component
function Stats() {
  return (
    <div className="bg-black py-10 sm:py-6 bg-opacity-80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-200">Number of current users</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">2 million</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-200">Latest sum credited to users</dt>    
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">$119 billion</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-200">Total win rate per day</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">80% wins</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

// Export your component
export default Stats;
