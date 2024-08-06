import Logo from './icons/Logo'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'

const Navbar = ({ lang }) => {
  return (
    <nav className='bg-deep-blue'>
      <div className='container flex flex-col items-center gap-6 lg:flex-row lg:justify-between py-6'>
        <Link href='/' className='flex items-center gap-4'>
          <div className='bg-blue w-14 h-14 lg:w-16 lg:h-16 p-1 rounded-full'>
            <Logo className='fill-deep-blue' />
          </div>
          <div>
            <p className='text-xl lg:text-3xl font-extrabold uppercase'>
              OpenFest
            </p>
            <p>2024</p>
          </div>
        </Link>
        <div className='flex w-full flex-wrap justify-center sm:justify-around lg:justify-end gap-6 gap-y-4 items-center font-semibold'>
          <Link href='/news'>Новини</Link>
          <Link href='https://cfp.openfest.org/'>Call for participation</Link>
          <Link href='mailto:info@openfest.org'>Пишете ни</Link>
          <LanguageSwitcher lang={lang} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
