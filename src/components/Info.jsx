import Circle from './icons/Circle'
import Eye from './icons/Eye'

const Info = () => {
  return (
    <div className='bg-deep-blue'>
      <div className='container'>
        <div className='flex flex-col-reverse lg:flex-row gap-6 items-center py-8 lg:py-16'>
          <div className='flex justify-center relative flex-1'>
            <Circle className='w-2/5 md:w-1/2' />
            <Eye className='absolute inset-0 translate-x-full w-2/5 md:translate-x-3/4 md:w-1/2' />
          </div>
          <div className='flex-1'>
            <h2 className='font-extrabold text-xl lg:text-3xl'>
              {' '}
              Повече за OpenFest
            </h2>
            <p className='mt-4 mb-2'>
              OpenFest e най-голямата българска конференция, посветена на
              свободната култура, свободния софтуер и софтуера с отворен код,
              свободното споделяне на знания – фестивал на свободното
              творчество.
            </p>
            <p>
              Организаторите всякога се стараят да дадат поле за изява и на
              свободното изкуство и свободното разпространение на знания.
            </p>
          </div>
        </div>
      </div>
      <div className='bg-blue'>
        <div className='container flex flex-col gap-2 items-center lg:gap-0 lg:flex-row lg:justify-between p-2'>
          <p>
            <i className='fa-solid fa-angle-right text-neon-pink'></i>
            1500+ посетители годишно
          </p>
          <p>
            <i className='fa-solid fa-angle-right text-neon-pink'></i>
            40+ Лектора
          </p>
          <p>
            <i className='fa-solid fa-angle-right text-neon-pink'></i>
            20+ Лекции
          </p>
          <p>
            <i className='fa-solid fa-angle-right text-neon-pink'></i>
            20+ Работилници
          </p>
          <p>
            <i className='fa-solid fa-angle-right text-neon-pink'></i>
            70+ Доброволеца
          </p>
        </div>
      </div>
    </div>
  )
}

export default Info
