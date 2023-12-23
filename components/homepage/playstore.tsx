'use client'
import { Card } from 'flowbite-react';
import Image from 'next/image';
import apple from '/assets/playsore.svg'
import playstore from '/assets/google.svg'

export default function PlayStore() {
  return (
    <Card>
      <h5 className=" text-3xl font-bold text-gray-900 dark:text-white flex justify-center items-center my-5 mb-5 pb-5">
        Bet faster from anywhere, anytime
      </h5>
      <p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg flex justify-center items-center">
        Stay up to date and get all Beta Sporting predictions on iOS & Android. Download the app today.
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
        <a
          className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
          href="#"
        >

          <Image
            alt='play'
            src='assets/google.svg'
            height={80}
            width={80}
            className=' px-5'
          />

          <div className="text-left">
            <div className="mb-1 text-xs">
              Download on 
            </div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              Google Play Store
            </div>
          </div>
        </a>
        <a
          className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
          href="#"
        >

          <Image
            alt='play'
            src='assets/playsore.svg'
            height={80}
            width={80}
            className=' px-5'
          />

          <div className="text-left">
            <div className="mb-1 text-xs">
              Get in on
            </div>
            <div className="-mt-1 font-sans text-sm font-semibold">
              Mac App Store
            </div>
          </div>
        </a>
      </div>
    </Card>
  )
}
