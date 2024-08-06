import Chicken from './icons/Chicken'

const Header = () => {
  return (
    <header className='relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-16 lg:pb-44 bg-deep-blue'>
      <div className='container flex flex-col gap-2 lg:gap-4 text-center'>
        <p className='uppercase tracking-widest lg:tracking-max text-xl lg:text3xl z-10'>
          2 - 3 Ноември 2024
        </p>
        <p className='font-extrabold text-4xl lg:text-8xl z-10'>OpenFest</p>
        <p className='font-extrabold text-4xl lg:text-8xl z-10'>2024</p>
      </div>
      <Chicken className='fill-blue absolute inset-0 scale-1.3 -translate-y-10 sm:scale-125 lg:-translate-y-16' />
    </header>
  )
}

export default Header
