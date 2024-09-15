import Image from 'next/image';
import { getDictionary } from '@/dictionaries';
import { getSortedPostsData } from '@/lib/posts';

const NewsFeed = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  const posts = await getSortedPostsData(lang);

  return (
    <section className='bg-blue-8'>
      <div className='container flex flex-col gap-4 sm:gap-8'>
        <h2 className='text-center text-2xl text-blue-2 sm:text-start sm:text-4xl'>
          {dictionary.main.news.title}
        </h2>
        <div className='flex flex-col gap-4 sm:flex-row sm:gap-8'>
          {posts.map((post) => {
            return (
              <div
                key={post.title}
                className='flex basis-1/3 flex-col overflow-hidden rounded-xl drop-shadow-2xl'
              >
                <div>
                  <Image src={post.imageUrl} width='400' height='190'></Image>
                </div>
                <div className='flex h-full flex-1 flex-col gap-2 bg-white p-6 text-center sm:gap-4'>
                  <p className='text-blue-2'>{post.title}</p>
                  <p className='text-sm opacity-50'>{post.date}</p>
                  <a
                    href='#'
                    className='mx-auto mt-auto self-baseline rounded-3xl bg-blue-2 px-12 py-2'
                  >
                    {dictionary.main.news.cardButton}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <a
          href='#'
          className='mt-4 flex items-center justify-center gap-4 self-center rounded-3xl bg-blue-2 px-12 py-2 sm:self-baseline'
        >
          {dictionary.main.news.button}
          <i className='fa-solid fa-arrow-right'></i>
        </a>
      </div>
    </section>
  );
};

export default NewsFeed;
