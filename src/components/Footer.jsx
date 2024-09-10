import Link from 'next/link';
import Image from 'next/image';

import { getDictionary } from '@/dictionaries';

import OpenFestLogoWithe from './openfest/openfest-logo-withe.svg';

const Footer = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#002A5D] px-12 pt-12 lg:px-9'>
      <div className='row-gap-6 m-auto mb-8 grid max-w-screen-xl gap-10 sm:grid-cols-2 lg:grid-cols-4'>
        <div className='sm:col-span-2'>
          <Image src={OpenFestLogoWithe} alt='OpenFest Logo' width={256} />
          <div className='mt-6 lg:max-w-sm'>
            <p className='text-[15px] text-base text-white'>
              {dictionary.footer.description}
            </p>
            <div className='mt-3 flex flex-col'>
              <div className='my-4 flex items-center'>
                <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#A9CDF7]'>
                  <i
                    className='fa-solid fa-calendar-days'
                    style={{ color: '#002A5D' }}
                  ></i>
                </div>
                <p className='text-base text-white'>
                  {dictionary.footer.eventDate}
                </p>
              </div>
              <div className='flex items-center'>
                <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#A9CDF7]'>
                  <i
                    className='fa-solid fa-location-dot'
                    style={{ color: '#002A5D' }}
                  ></i>
                </div>
                <a
                  href='https://maps.app.goo.gl/XsAKbZh7mMR3T8Rk8'
                  target='_blank'
                  className='text-base text-white hover:underline hover:underline-offset-4'
                >
                  {dictionary.footer.eventLocation}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-2 text-sm'>
          <p className='text-base font-bold tracking-wide text-gray-900'>
            Contacts
          </p>
          <div className='mt-6 flex basis-1/4 flex-col gap-4'>
            <a
              href='mailto:info@openfest.org'
              target='_blank'
              className='hover:underline hover:underline-offset-4'
            >
              Свържете се
              <i className='fa-solid fa-angle-right ml-1 text-neon-green'></i>
            </a>
            <a
              href='https://cfp.openfest.org/'
              target='_blank'
              className='hover:underline hover:underline-offset-4'
            >
              Включете се
              <i className='fa-solid fa-angle-right ml-1 text-neon-green'></i>
            </a>
          </div>
        </div>
        <div>
          <span className='text-base font-bold tracking-wide text-white'>
            {dictionary.footer.contactTeam}
          </span>
          <p className='mt-4 text-[15px] text-base text-white'>
            {dictionary.footer.contactDirections}
          </p>
          <div className='mt-0 flex flex-col'>
            <div className='my-4 flex items-center'>
              <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#A9CDF7]'>
                <i
                  className='fa-solid fa-envelope'
                  style={{ color: '#002A5D' }}
                ></i>
              </div>
              <a
                href='mailto:info@openfest.org'
                target='_blank'
                className='text-base hover:underline hover:underline-offset-4'
              >
                info@openfest.org
              </a>
            </div>
            <div className='flex items-center'>
              <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#A9CDF7]'>
                <i
                  className='fa-solid fa-user-plus'
                  style={{ color: '#002A5D' }}
                ></i>
              </div>
              <a
                href='http://cfp.openfest.org/'
                target='_blank'
                className='text-base hover:underline hover:underline-offset-4'
              >
                Call for participation
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-12 mt-14 flex justify-center gap-7'>
        <a
          href='https://www.youtube.com/@openfestbulgaria'
          target='_blank'
          className='cursor flex h-12 w-12 items-center justify-center rounded-full bg-[#A9CDF7] text-[#002A5D] hover:bg-white'
        >
          <i className='fa-brands fa-youtube fa-xl'></i>
        </a>
        <a
          href='https://www.facebook.com/OpenFestBulgaria'
          target='_blank'
          className='cursor flex h-12 w-12 items-center justify-center rounded-full bg-[#A9CDF7] text-[#002A5D] hover:bg-white'
        >
          <i className='fa-brands fa-facebook fa-xl'></i>
        </a>
        <a
          href='https://twitter.com/openfestbg'
          target='_blank'
          className='cursor flex h-12 w-12 items-center justify-center rounded-full bg-[#A9CDF7] text-[#002A5D] hover:bg-white'
        >
          <i className='fa-brands fa-x-twitter fa-xl'></i>
        </a>
        <a
          href='https://mastodon.social/@openfest'
          target='_blank'
          className='cursor flex h-12 w-12 items-center justify-center rounded-full bg-[#A9CDF7] text-[#002A5D] hover:bg-white'
        >
          <i className='fa-brands fa-mastodon fa-xl'></i>
        </a>
        <a
          href='https://www.instagram.com/openfestbulgaria'
          target='_blank'
          className='cursor flex h-12 w-12 items-center justify-center rounded-full bg-[#A9CDF7] text-[#002A5D] hover:bg-white'
        >
          <i className='fa-brands fa-instagram fa-xl'></i>
        </a>
        <a
          href='https://www.linkedin.com/company/openfest-bulgaria/'
          target='_blank'
          className='cursor flex h-12 w-12 items-center justify-center rounded-full bg-[#A9CDF7] text-[#002A5D] hover:bg-white'
        >
          <i className='fa-brands fa-linkedin-in fa-xl'></i>
        </a>
      </div>
      <div className='m-auto flex max-w-screen-xl flex-col-reverse justify-between border-t border-[#F2F5F9] pb-10 pt-5 lg:flex-row'>
        <p className='text-sm text-[#F2F5F9]'>
          © {currentYear} OpenFest. {dictionary.footer.copyright}
        </p>
        <ul className='mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0'>
          <li>
            <a
              href='/'
              className='hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300'
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href='/'
              className='hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300'
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href='/'
              className='hover:text-deep-purple-accent-400 text-sm text-gray-600 transition-colors duration-300'
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
