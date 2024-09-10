// import { getSortedPostsData } from '../../lib/posts';
// import { getDictionary } from '../../../dictionaries';

export default async function PageNovini({ params }) {
  const { lang } = params;
//   const dictionary = await getDictionary(lang);
//   const { posts } = await getSortedPostsData(lang);

  return (  
    <>
      <main>
        <div className='container flex flex-col py-8 lg:py-16 gap-8 lg:gap-16 text-black'>
          <div className='flex flex-col'>
            <h2 className='text-xl lg:text-3xl font-extrabold text-center mb-6 lg:mb-10'>
              news
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
