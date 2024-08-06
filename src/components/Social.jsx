const Social = () => {
  return (
    <div id='social' className='py-8 lg:pb-16 bg-deep-blue'>
      <div className='container'>
        <h2 className='font-extrabold text-center text-xl lg:text-3xl mb-6 lg:mb-12'>
          Продължете разговора
        </h2>
        <div className='flex flex-wrap justify-center gap-10 md:gap-20 md:gap-y-12'>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-neon-green w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-3xl'>
              <i className='fa-brands fa-youtube'></i>
            </div>
            @openfestbulgaria
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-black w-12 h-12 md:w-16 md:h-16 rounded-full text-neon-green text-5xl md:text-6xl'>
              <i className='fa-brands fa-facebook '></i>
            </div>
            @openfestbulgaria
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-neon-green w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-3xl'>
              <i className='fa-brands fa-x-twitter'></i>
            </div>
            OpenFestBG
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-neon-green w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-3xl'>
              <i className='fa-brands fa-instagram'></i>
            </div>
            openfestbulgaria
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-neon-green w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-3xl'>
              <i className='fa-brands fa-mastodon'></i>
            </div>
            @openfest
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-neon-green w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-3xl'>
              <i className='fa-brands fa-facebook-f'></i>
            </div>
            Facebook група: OpenFest
          </div>
          <div className='flex items-center gap-4'>
            <div className='flex justify-center items-center bg-neon-green w-12 h-12 md:w-16 md:h-16 rounded-full text-black text-3xl'>
              <i className='fa-brands fa-linkedin-in'></i>
            </div>
            openfest-bulgaria
          </div>
        </div>
      </div>
    </div>
  )
}

export default Social
