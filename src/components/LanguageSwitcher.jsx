'use client'

import Link from 'next/link'
import { i18n } from '../../i18n-config'
import { usePathname } from 'next/navigation'

export default function LocaleSwitcher({ lang }) {
  const pathName = usePathname()

  const { locales } = i18n
  const otherLocale = locales?.find((cur) => cur !== lang)

  function getRedirectPathName() {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = otherLocale

    return segments.join('/')
  }

  return (
    <Link
      href={getRedirectPathName()}
      locale={otherLocale}
      className='flex justify-center items-center'
    >
      <i className='fa-solid fa-globe'></i>
    </Link>
  )
}
