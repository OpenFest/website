import Image from 'next/image';

import { getDictionary } from '@/dictionaries';

const Partners = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  const sponsorLogos = ['logo-1', 'logo-2', 'logo-3', 'logo-4', 'logo-5'];
  const mediaPartnerLogos = ['logo-1', 'logo-2', 'logo-3', 'logo-4', 'logo-5'];

  const getShuffledLogos = (logos) => {
    for (let i = logos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [logos[i], logos[j]] = [logos[j], logos[i]];
    }
    return logos;
  };

  return (
    <section>
      <div className='container flex flex-col gap-10 !py-16 sm:gap-16'>
        <div>
          <h2 className='pb-4 text-center text-2xl text-blue-2 sm:pb-8 sm:text-4xl'>
            {dictionary.main.partners.sponsors}
          </h2>
          <div className='flex flex-wrap justify-evenly gap-6'>
            {getShuffledLogos(sponsorLogos).map((logo) => {
              return (
                <div
                  key={logo}
                  className='cursor-pointer opacity-50 hover:opacity-100'
                >
                  <p>{logo}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className='pb-4 text-center text-2xl text-blue-2 sm:pb-8 sm:text-4xl'>
            {dictionary.main.partners.media}
          </h2>
          <div className='flex flex-wrap justify-evenly gap-6'>
            {getShuffledLogos(mediaPartnerLogos).map((logo) => {
              return (
                <div
                  key={logo}
                  className='cursor-pointer opacity-50 hover:opacity-100'
                >
                  <p>{logo}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
