import { getSortedPostsData, getAllPosts } from '../../../../lib/posts'
import News from '../../../../components/News'
import Social from '../../../../components/Social'
import Pagination from '../../../../components/Pagination'

const POSTS_PER_PAGE = 4

export default async function AllNews({ params }) {
  const { lang } = params
  const { posts } = await getSortedPostsData(lang)
  const totalPages = Math.max(1, Math.floor(posts.length / POSTS_PER_PAGE))
  const page = parseInt(params.page)
  const startPost = (page - 1) * POSTS_PER_PAGE
  const endPost = page * POSTS_PER_PAGE
  const paginatedPosts = posts.slice(startPost, endPost)

  return (
    <>
      <div className='bg-deep-blue py-16 text-center'>
        <div className='container'>
          <h1 className='text-4xl font-extrabold'>Новини от OpenFest</h1>
        </div>
      </div>
      <div className='container py-10 text-black'>
        <News posts={paginatedPosts} />
        <Pagination baseUrl='/news' page={page} totalPages={totalPages} />
      </div>
      <Social />
    </>
  )
}

export async function generateStaticParams() {
  const paths = []
  const allPosts = await getAllPosts()

  for (const [locale, currentPosts] of Object.entries(allPosts)) {
    const totalPages = Math.max(
      1,
      Math.floor(currentPosts.length / POSTS_PER_PAGE)
    )

    Array.from({ length: totalPages }, (_, i) => {
      paths.push({ params: { page: (i + 1).toString() }, locale })
    })
  }

  return paths
}
