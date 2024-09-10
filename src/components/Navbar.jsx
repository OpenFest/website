// import Logo from './icons/Logo'
import LanguageSwitcher from './LanguageSwitcher';

import Link from 'next/link';
import Image from 'next/image';
// import {
//   DisclosureButton,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuItems,
//   Transition,
// } from '@headlessui/react';
// import { BookmarkIcon } from '@heroicons/react';

import { getDictionary } from '@/dictionaries';

import OpenFestLogo from './openfest/openfest-logo.svg';

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

const open = true;

const Navbar = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <nav className='my-6 bg-white'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          <a
            href='https://openfest.org/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <Image src={OpenFestLogo} alt='OpenFest Logo' width={256} />
          </a>
          {/* <button
          data-collapse-toggle='navbar-default'
          type='button'
          class='inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span class='sr-only'>Open main menu</span>
          <svg
            class='h-5 w-5'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button> */}
          <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
            <ul className='mt-4 flex flex-col font-medium text-[#0B1C30] md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse'>
              <li>
                <a href='#' className='' aria-current='page'>
                  {dictionary.nav.home}
                </a>
              </li>
              <li>
                <a href='#' className=''>
                  {dictionary.nav.about}
                </a>
              </li>
              <li>
                <a href='#' className=''>
                  {dictionary.nav.partners}
                </a>
              </li>
              <li>
                <a href='#' className=''>
                  {dictionary.nav.archive}
                </a>
              </li>
              <li>
                <a href='#' className=''>
                  {dictionary.nav.contact}
                </a>
              </li>
              <li>
                <LanguageSwitcher lang={lang} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
