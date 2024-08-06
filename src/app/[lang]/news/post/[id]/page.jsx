import Social from '../../../../../components/Social'
import { getSortedPostsData, getAllPosts } from '../../../../../lib/posts'
import { notFound } from 'next/navigation'

export default async function NewsDetails({ params }) {
  const { id, lang } = params
  const { posts } = await getSortedPostsData(lang)
  const post = posts.filter((post) => post.id === id).pop()

  if (!post) notFound()

  return (
    <>
      <div className='flex flex-col gap-4 container py-6 text-black'>
        <p className='text-4xl font-extrabold'>{post.title}</p>
        <p>{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </div>
      <Social />
    </>
  )
}

export async function generateStaticParams() {
  const paths = []
  const allPosts = await getAllPosts()

  for (const [locale, currentPosts] of Object.entries(allPosts)) {
    currentPosts.forEach((post) => {
      paths.push({ id: post.id, lang: locale })
    })
  }

  return paths
}
