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

const NavBar = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <nav className='container flex flex-col items-center justify-between gap-4 bg-white text-black sm:flex-row'>
        <div>
          <a href='https://openfest.org/' className='flex items-center'>
            <Image src={OpenFestLogo} alt='OpenFest Logo' width={256} />
          </a>
        </div>
        <div className='flex items-center justify-center'>
          <ul className='flex flex-wrap items-center justify-center gap-4 sm:gap-8'>
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
        {
          //<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
          //  <div
          //    className='hidden w-full md:block md:w-auto'
          //    id='navbar-default'
          //  >
          //              //  </div>
          //</div>
        }
      </nav>
    </>
  );
};

export default NavBar;
