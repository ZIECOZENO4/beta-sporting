'use client';

import { Accordion } from 'flowbite-react';
import Link from 'next/link';

export default function DefaultAccordion() {
  return (
    <div>
    <Accordion className='py-6 bg-slate-400'>
      <Accordion.Panel>
        <h1 className=' flex justify-start text-2xl md:text-4xl pl-2 pb-2 font-heading'>Questions You May Ask</h1>
        <Accordion.Title>
          <div className=' md:text-2xl font-heading text-[20px]'>
              What is Beta Sporting?
          </div>
        
        </Accordion.Title>
        <Accordion.Content>
          <div className="mb-2 text-gray-500 dark:text-gray-400">
            <h2>
              Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
              dropdowns, modals, navbars, and more.
            </h2>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            <h3>
              How to get sarted with Beta Sporting and Football mathematics
            </h3>
            <Link
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://flowbite.com/docs/getting-started/introduction/"
            >
              <h3>
                get started with Beta
              </h3>
            </Link>
            <h3>
              Get started with Beta Sporting, and unleach your power of prediction, we will also make you understand the inner part of football and football mathematics. BETA SPORTING WE DEY WIN.
            </h3>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        <div className=' md:text-2xl font-heading text-[20px]'>
        Why should we trust Beta Sporting and place bets ?
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <h2 className="mb-2 text-gray-500 dark:text-gray-400">
            <p>
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
              has a design equivalent in our Figma file.
            </p>
          </h2>
          <div className="text-gray-500 dark:text-gray-400">
            <p>
              Check out the
            </p>
            <Link
              className="text-cyan-600 hover:underline dark:text-cyan-500"
              href="https://flowbite.com/figma/"
            >
              <p>
                Figma design system
              </p>
            </Link>
            <p>
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
        <div className=' md:text-2xl font-heading text-[20px]'>
          What are the differences between Beta Sporting and other betting and prediction websites?
          </div>
        </Accordion.Title>
        <Accordion.Content>
          <div className="mb-2 text-gray-500 dark:text-gray-400">
            <h2>
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas
              Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
              components, whereas Tailwind UI offers sections of pages.
            </h2>
          </div>
          <div className="mb-2 text-gray-500 dark:text-gray-400">
            <h3>
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
              technical reason stopping you from using the best of two worlds.
            </h3>
          </div>
          <h2 className="mb-2 text-gray-500 dark:text-gray-400">
            Learn more about these strategies:
          </h2>
          <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
            <li>
              <Link
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://flowbite.com/pro/"
              >
                <h3>
                  Beta Sporting Pro
                </h3>
              </Link>
            </li>
            <li>
              <Link
                className="text-cyan-600 hover:underline dark:text-cyan-500"
                href="https://tailwindui.com/"
                rel="nofollow"
              >
                <h3>
                  Beta Sporting.com
                </h3>
              </Link>
            </li>
          </ul>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>

    </div>

  )
}
