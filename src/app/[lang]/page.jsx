import CountDownTimer from '@/components/CountDownTimer';
import NewsFeed from '@/components/NewsFeed';
import Partners from '@/components/Partners';
// import { getSortedPostsData } from '../../lib/posts';
import { getDictionary } from '@/dictionaries';

export default async function Home({ params }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  // const { posts } = await getSortedPostsData(lang);

  return (
    <>
      <section>
        <div className='bg-gradient-to-r from-sky-500 to-indigo-500'>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='text-center'>
              <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                {dictionary.main.date}
              </h1>
              <h2 className='text-gray-900'>{dictionary.main.monthYear}</h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                {dictionary.main.titleLocation}
              </p>
              {/* <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  Get started
                </a>
                <a
                  href='#'
                  className='text-sm font-semibold leading-6 text-gray-900'
                >
                  Learn more <span aria-hidden='true'>→</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <CountDownTimer props={dictionary.main.countdownTimer} />

      <section className='bg-[#E2EFFE] px-24 py-12'>
        <h2 className='pb-16 text-center text-[2.2rem] text-[#004394]'>
          {dictionary.main.description.title}
        </h2>
        <div className='flex-col md:flex md:flex-row'>
          <div className='mx-2 text-center text-[#004394]'>
            {dictionary.main.description.text}
          </div>
          <div className='mx-2 text-center text-[#004394]'>
            {dictionary.main.description.text}
          </div>
        </div>
      </section>

      <section>
        <h2 className='pb-16 text-center text-[2.2rem] text-[#004394]'>
          {dictionary.main.cfp.title}
        </h2>
        {/* <dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3'> */}
        <dl className='mt-5 grid grid-cols-1 place-items-center gap-1 sm:grid-cols-3'>
          <div className='max-w-[350px] overflow-hidden rounded-lg bg-[#004394] px-4 py-5 text-center shadow sm:p-6'>
            <dt className='truncate text-sm font-medium text-[#004394]'>
              <div className='m-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-[#C8E0FC] text-[2.3rem]'>
                <i className='fa-solid fa-lightbulb'></i>
              </div>
            </dt>
            <dd className='mt-1 text-[22px] font-semibold text-[#F2F5F9]'>
              {dictionary.main.cfp.lecture}
            </dd>
          </div>
          <div className='max-w-[350px] overflow-hidden rounded-lg bg-[#004394] px-4 py-5 text-center shadow sm:p-6'>
            <dt className='truncate text-sm font-medium text-[#004394]'>
              <div className='m-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-[#C8E0FC] text-[2.3rem]'>
                <i className='fa-solid fa-helmet-safety'></i>
              </div>
            </dt>
            <dd className='mt-1 text-[22px] font-semibold text-[#F2F5F9]'>
              {dictionary.main.cfp.volunteers}
            </dd>
          </div>
          <div className='max-w-[350px] overflow-hidden rounded-lg bg-[#004394] px-4 py-6 text-center shadow sm:p-6'>
            <dt className='truncate text-sm font-medium text-[#004394]'>
              <div className='m-auto mb-2 flex h-20 w-20 items-center justify-center rounded-full bg-[#C8E0FC] text-[2.3rem]'>
                <i className='fa-solid fa-handshake-angle'></i>
              </div>
            </dt>
            <dd className='mt-1 text-[22px] font-semibold text-[#F2F5F9]'>
              {dictionary.main.cfp.partners}
            </dd>
          </div>
        </dl>
      </section>
      <main>
        <NewsFeed />
        <Partners props={lang} />
      </main>
    </>
  );
}
