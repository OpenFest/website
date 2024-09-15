import CountDownTimer from '@/components/CountDownTimer';
import NewsFeed from '@/components/NewsFeed';
import Partners from '@/components/Partners';
import Image from 'next/image';
import { getDictionary } from '@/dictionaries';

export default async function Home({ params }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <section className='h-[65vh] bg-home-bg bg-cover bg-bottom sm:h-[75vh]'>
        <div className='container flex h-full flex-col justify-center gap-10 text-black sm:gap-16'>
          <div className='text-center'>
            <p className='font-semibold uppercase tracking-[0.2em] text-white sm:text-xl'>
              {dictionary.main.date}
            </p>
            <h1 className='text-6xl font-bold text-white sm:text-7xl'>
              OpenFest <br /> 2024
            </h1>
          </div>
          <div className='text-center'>
            <p className='pb-2 text-2xl font-semibold text-white sm:pb-4 sm:text-5xl'>
              “Let’s share the freedom!”
            </p>
            <p className='text-xl text-white sm:text-3xl'>
              {dictionary.main.titleLocation}
            </p>
          </div>
        </div>
      </section>
      <CountDownTimer props={dictionary.main.countdownTimer} />
      <section className='bg-blue-8'>
        <div className='container flex flex-col gap-4 sm:gap-8'>
          <h2 className='text-center text-2xl text-blue-2 sm:text-4xl'>
            {dictionary.main.description.title}
          </h2>
          <div className='flex flex-col gap-6 sm:flex-row'>
            <div className='flex-1'>
              <p> {dictionary.main.description.text}</p>
            </div>
            <div className='flex-1'>
              <Image
                src='/images/openfest-2.webp'
                width='620'
                height='380'
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <h2 className='pb-4 text-center text-2xl text-blue-2 sm:pb-8 sm:text-4xl'>
            {dictionary.main.cfp.title}
          </h2>
          <div className='flex flex-col gap-4 sm:flex-row sm:gap-8'>
            <div className='flex basis-1/3 flex-col items-center justify-center gap-3 rounded-xl bg-blue-2 p-6 sm:gap-6'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-blue-8 text-4xl text-blue-2 shadow-md shadow-black sm:h-24 sm:w-24 sm:text-5xl'>
                <i className='fa-solid fa-lightbulb'></i>
              </div>
              <p className='text-center text-white'>
                {dictionary.main.cfp.lecture}
              </p>
            </div>
            <div className='flex basis-1/3 flex-col items-center justify-center gap-3 rounded-xl bg-blue-2 p-6 sm:gap-6'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-blue-8 text-4xl text-blue-2 shadow-md shadow-black sm:h-24 sm:w-24 sm:text-5xl'>
                <i className='fa-solid fa-helmet-safety'></i>
              </div>
              <p className='text-center text-white'>
                {dictionary.main.cfp.volunteers}
              </p>
            </div>
            <div className='flex basis-1/3 flex-col items-center justify-center gap-3 rounded-xl bg-blue-2 p-6 sm:gap-6'>
              <div className='flex h-20 w-20 items-center justify-center rounded-full bg-blue-8 text-4xl text-blue-2 shadow-md shadow-black sm:h-24 sm:w-24 sm:text-5xl'>
                <i className='fa-solid fa-handshake-angle'></i>
              </div>
              <p className='text-center text-white'>
                {dictionary.main.cfp.partners}
              </p>
            </div>
          </div>
        </div>
      </section>
      <NewsFeed lang={lang} />
      <Partners lang={lang} />
    </>
  );
}
