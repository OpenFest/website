import Image from 'next/image';

import { getDictionary } from '@/dictionaries';

const Partners = async ({ lang }) => {
  const dictionary = await getDictionary(lang);

  console.log(lang);

  return (
    <div className='my-14'>
      <div className='lg:py-22 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <p className='text-center text-base font-semibold uppercase tracking-wider text-gray-600'>
          {dictionary.main.partners.media}
        </p>
        <div className='mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-12'>
          <div className='col-span-1 flex justify-center bg-gray-50 px-8 py-8'>
            <Image
              className='max-h-12'
              src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
              alt='Workcation'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 px-8 py-8'>
            <Image
              className='max-h-12'
              src='https://tailwindui.com/img/logos/mirage-logo-gray-400.svg'
              alt='Mirage'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 px-8 py-8'>
            <Image
              className='max-h-12'
              src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
              alt='Tuple'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 px-8 py-8'>
            <Image
              className='max-h-12'
              src='https://tailwindui.com/img/logos/laravel-logo-gray-400.svg'
              alt='Laravel'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 px-8 py-8'>
            <Image
              className='max-h-12'
              src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
              alt='StaticKit'
            />
          </div>
          <div className='col-span-1 flex justify-center bg-gray-50 px-8 py-8'>
            <Image
              className='max-h-12'
              src='https://tailwindui.com/img/logos/statamic-logo-gray-400.svg'
              alt='Statamic'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
