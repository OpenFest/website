import Link from 'next/link'

export default function Pagination({ baseUrl, page, totalPages }) {
  return (
    <div className='flex justify-center gap-6 text-black pt-6'>
      <Link
        href={`${baseUrl}/1`}
        className='text-center border border-neon-green w-8 h-8 rounded-2xl hover:bg-neon-green'
      >
        <i className='fa-solid fa-angles-left'></i>
      </Link>
      {page > 1 ? (
        <Link
          href={`${baseUrl}/${page - 1}`}
          className='text-center border border-neon-green w-8 h-8 rounded-2xl hover:bg-neon-green'
        >
          <i className='fa-solid fa-angle-left'></i>
        </Link>
      ) : (
        <></>
      )}
      {Array.from(Array(totalPages), (_, i) => {
        const pageNumber = i + 1
        return (
          <Link
            href={`${baseUrl}/${pageNumber}`}
            key={pageNumber}
            className={`text-center border border-neon-green w-8 h-8 rounded-2xl hover:bg-neon-green ${pageNumber === page ? 'bg-neon-green' : ''}`}
          >
            {pageNumber}
          </Link>
        )
      })}
      {page < totalPages ? (
        <Link
          href={`${baseUrl}/${page + 1}`}
          className='text-center border border-neon-green w-8 h-8 rounded-2xl hover:bg-neon-green'
        >
          <i className='fa-solid fa-angle-right'></i>
        </Link>
      ) : (
        <></>
      )}
      <Link
        href={`${baseUrl}/${totalPages}`}
        className='text-center border border-neon-green w-8 h-8 rounded-2xl hover:bg-neon-green'
      >
        <i className='fa-solid fa-angles-right'></i>
      </Link>
    </div>
  )
}
