import Link from 'next/link'

export default function News({ posts }) {
  return (
    <div className='flex flex-wrap text-center gap-6 lg:text-left lg:gap-4 lg:gap-y-8'>
      {posts.map((post) => (
        <div key={post.id} className='flex flex-col gap-2 basis-24 flex-1'>
          <p className='text-xl font-extrabold'>{post.title}</p>
          <p>{post.date}</p>
          <p>{post.truncatedContent}</p>
          <Link href={`/news/post/${post.id}`}>
            <p className='underline decoration-2 underline-offset-4 decoration-neon-green mt-auto'>
              Прочетете
              <i className='fa-solid fa-angle-right text-neon-green ml-1'></i>
            </p>
          </Link>
        </div>
      ))}
    </div>
  )
}
