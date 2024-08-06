import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mt-auto'>
      <div className='bg-dark-blue pt-8 lg:pt-16 pb-6'>
        <div className='container'>
          <div className='flex items-center gap-4 mb-3'>
            <div className='bg-blue w-14 h-14 lg:w-16 lg:h-16 p-1 rounded-full'>
              <svg
                className='fill-deep-blue'
                width='100%'
                height='100%'
                viewBox='0 0 293 182'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M0 86.1918L18.5717 65.0594L66.4078 111.895C70.0214 108.957 74.1682 105.87 78.7001 102.753L48.1916 61.7055L65.8746 49.4475L93.4804 93.6119C101.863 89.0114 111.163 84.7374 121.353 81.4429L98.1307 8.48858L133.29 0L147.833 75.4772C153.401 74.8539 159 74.5274 164.627 74.5571L177.601 13.1484L203.104 19.0845L184.917 76.4566C204.2 79.9886 220.283 88.2397 233.168 98.5982L282.663 37.9315L293 47.7557L241.876 106.256C252.095 116.317 259.796 127.566 264.98 138.221L233.257 156.594C233.257 156.594 220.402 126.349 196.202 108.126C198.986 114.537 200.497 121.63 200.497 129.05C200.497 158.196 176.772 182 147.714 182C117.117 182 92.888 155.703 95.0206 125.34L122.004 128.605C118.361 142.05 128.55 155.941 142.916 155.941C154.764 155.941 164.598 146.205 164.598 134.215C164.598 102.308 128.402 94.5023 102.544 105.484C86.4605 112.34 73.5166 122.402 55.8039 136.084C37.7061 119.107 18.8679 102.783 0 86.1918Z'
                />
              </svg>
            </div>
            <div>
              <p className='text-xl lg:text-3xl font-extrabold uppercase'>
                OpenFest
              </p>
              <p>2024</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-6'>
            <div className='basis-1/2'>
              <p>
                OpenFest е конференция, посветена на свободната култура,
                свободния софтуер и софтуера с отворен код, свободното споделяне
                на знания.
              </p>
              <div className='flex flex-col gap-4 my-4'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full mr-3'>
                    <i className='fa-solid fa-calendar-days'></i>
                  </div>
                  2 и 3 ноември 2024 (събота и неделя)
                </div>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full mr-3'>
                    <i className='fa-solid fa-location-dot'></i>
                  </div>
                  Sofia Tech Park
                </div>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full mr-3'>
                    <i className='fa-solid fa-ticket'></i>
                  </div>
                  Вход свободен, без предварителна регистрация
                </div>
              </div>
            </div>
            <div className='basis-1/4'>
              <p className='font-extrabold'>Свържете се</p>
              <p>
                Ако имате въпроси, предложения или желаете да се включите в
                OpenFest 2024, пишете ни:
              </p>
              <div className='flex flex-col'>
                <div className='flex items-center my-4'>
                  <div className='w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full mr-3'>
                    <i className='fa-solid fa-envelope'></i>
                  </div>
                  <Link href='mailto:info@openfest.org'>info@openfest.org</Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-4 basis-1/4'>
              <Link href='https://cfp.openfest.org/'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full mr-3'>
                    <i className='fa-solid fa-lightbulb'></i>
                  </div>
                  Call for Participation
                </div>
              </Link>
              <Link href='https://cfp.openfest.org/'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full mr-3'>
                    <i className='fa-solid fa-helmet-safety'></i>
                  </div>
                  Call for Volunteers
                </div>
              </Link>
              <Link href='https://cfp.openfest.org/'>
                <div className='flex items-center'>
                  <div className='w-10 h-10 bg-neon-green text-black flex items-center justify-center rounded-full mr-3'>
                    <i className='fa-solid fa-handshake-angle'></i>
                  </div>
                  Партньорство и спонсорство
                </div>
              </Link>
            </div>
          </div>
          <div className='flex justify-center gap-4 mt-4'>
            <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full'>
              <a
                href='https://www.youtube.com/@openfestbulgaria'
                target='_blank'
              >
                <i className='fa-brands fa-youtube'></i>
              </a>
            </div>
            <div className='text-blue text-4xl flex items-center justify-center rounded-full'>
              <a
                href='https://www.facebook.com/groups/6360369433'
                target='_blank'
              >
                <i className='fa-brands fa-facebook'></i>
              </a>
            </div>
            <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full'>
              <a href='https://twitter.com/openfestbg' target='_blank'>
                <i className='fa-brands fa-x-twitter'></i>
              </a>
            </div>
            <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full'>
              <a href='https://mastodon.social/@openfest' target='_blank'>
                <i className='fa-brands fa-mastodon'></i>
              </a>
            </div>
            <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full'>
              <a
                href='https://www.instagram.com/openfestbulgaria'
                target='_blank'
              >
                <i className='fa-brands fa-instagram'></i>
              </a>
            </div>
            <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full'>
              <a
                href='https://www.linkedin.com/company/openfest-bulgaria/'
                target='_blank'
              >
                <i className='fa-brands fa-linkedin-in'></i>
              </a>
            </div>
          </div>
          <p className='text-center mt-5'>
            &copy; 2024 OpenFest. Някои права са запазени.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
