import Header from '../../components/Header'
import Info from '../../components/Info'
import JoinUs from '../../components/JoinUs'
import Social from '../../components/Social'
import News from '../../components/News'
import { getSortedPostsData } from '../../lib/posts'
import { getDictionary } from '../../../dictionaries'
import { Locale } from '../../../i18n-config'

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(lang)
  const { posts } = await getSortedPostsData(lang)

  return (
    <>
      <Header />
      <main>
        <Info />
        <JoinUs />
        <div className='container flex flex-col py-8 lg:py-16 gap-8 lg:gap-16 text-black'>
          <div className='flex flex-col'>
            <h2 className='text-xl lg:text-3xl font-extrabold text-center mb-6 lg:mb-10'>
              Новини
            </h2>
            <News posts={posts} />
          </div>
        </div>
        <Social />
      </main>
    </>
  )
}
