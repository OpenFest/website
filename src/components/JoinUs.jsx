import Link from 'next/link'
import BackToTheSource from './icons/BackToTheSource'

export default function JoinUs() {
  return (
    <div className='container flex flex-col pt-8 lg:pt-16 gap-8 lg:gap-16'>
      <div className='flex flex-col-reverse text-black lg:flex-row gap-6 items-center'>
        <div className='flex-1'>
          <h2 className='font-extrabold text-xl lg:text-3xl'>
            Станете част от OpenFest 2024
          </h2>
          <p className='mt-4 mb-2'>
            Фестът е оживен двудневен празник на всичко с отворен код, който
            събира ентусиасти, разработчици и новатори. Независимо дали сте
            опитен професионалист или начинаещ, OpenFest предлага уникална
            възможност да се потопите в света на отворените технологии и
            съвместното творчество във всички измерения.
          </p>
          <div className='flex flex-col gap-2 mt-4'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full mr-3 text-white min-w-10'>
                <i className='fa-solid fa-calendar-days'></i>
              </div>
              2 и 3 ноември 2024 (събота и неделя)
            </div>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full mr-3 text-white min-w-10'>
                <i className='fa-solid fa-location-dot'></i>
              </div>
              Sofia Tech Park
            </div>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-blue flex items-center justify-center rounded-full mr-3 min-w-10 text-blue'>
                <i className='fa-solid fa-location-dot'></i>
              </div>
              Вход свободен, без предварителна регистрация
            </div>
          </div>
        </div>
        <div className='flex justify-center relative flex-1'>
          <BackToTheSource />
        </div>
      </div>
      <div className='flex flex-col text-black lg:flex-row gap-6 items-center'>
        <div className='flex flex-col gap-4 items-center center relative flex-1'>
          <div className='flex items-center justify-center bg-blue rounded-full p-4 text-5xl w-24 h-24 lg:text-7xl lg:w-36 lg:h-36'>
            <i className='fa-regular fa-lightbulb text-neon-pink'></i>
          </div>
          <h2 className='font-extrabold text-3xl text-center'>
            Предложете
            <br />
            идея
          </h2>
        </div>
        <div className='flex-1'>
          <p className='mb-2'>
            Представете лекция, уъркшоп или щанд. Приемаме предложения до 1
            септември 2024 г
          </p>
          <p>Тази година направленията са:</p>
          <ul>
            <li>
              <strong>Advanced Technical</strong> – За технически лекции с
              по-голяма сложност.
            </li>
            <li>
              <strong>Technical</strong> – Това е мястото да разкажете какво
              ново сте открили през годината, което би било полезно и разбираемо
              и за начинаещи.
            </li>
            <li>
              <strong>OpenArt</strong> – Свободата да твориш под Creative
              Commons и свободното изкуство във всичките му форми.
            </li>
            <li>
              <strong>Общност и социален</strong> – Отворени общности,
              образование и управление, свободни лицензи, как човек може да се
              изхранва с хобито си и др.
            </li>
          </ul>
          <div className='flex justify-center mt-4'>
            <Link
              href='https://cfp.openfest.org/'
              className='bg-neon-green px-16 py-4 rounded-md'
            >
              Предложете идея
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col-reverse text-black lg:flex-row gap-6 items-center'>
        <div className='flex-1'>
          <p>
            OpenFest се организира и провежда изцяло от доброволци. Тази година
            отново се надяваме да срещнем нови съмишленици и приятели, да
            създадем вълнуващо събитие. Можете да се включите в екипите: Мрежа;
            Логистика; Аудио и видео; Медия, уебсайт и дизайн; Хералди;
            Рецепция.
          </p>
          <p className='mt-4'>
            Повече за тях можете да прочетете във формата за кандидатстване.
          </p>
          <div className='flex justify-center mt-4'>
            <Link
              href='https://cfp.openfest.org/'
              className='bg-neon-green px-16 py-4 rounded-md'
            >
              Кандидатствайте
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4 items-center center relative flex-1'>
          <div className='flex items-center justify-center bg-blue rounded-full p-4 text-5xl w-24 h-24 lg:text-7xl lg:w-36 lg:h-36'>
            <i className='fa-solid fa-helmet-safety text-neon-pink'></i>
          </div>
          <h2 className='font-extrabold text-3xl text-center'>
            Станете
            <br />
            доброволец
          </h2>
        </div>
      </div>
      <div className='flex flex-col text-black lg:flex-row gap-6 items-center'>
        <div className='flex flex-col gap-4 items-center center relative flex-1'>
          <div className='flex items-center justify-center bg-blue rounded-full p-4 text-5xl w-24 h-24 lg:text-7xl lg:w-36 lg:h-36'>
            <i className='fa-solid fa-handshake-angle text-neon-pink'></i>
          </div>
          <h2 className='font-extrabold text-3xl text-center'>
            Подкрепете <br /> събитието като <br /> партньор
          </h2>
        </div>
        <div className='flex-1'>
          <p>
            OpenFest се организира и провежда изцяло от доброволци. Тази година
            отново се надяваме да срещнем нови съмишленици и приятели, да
            създадем вълнуващо събитие. Можете да се включите в екипите: Мрежа;
            Логистика; Аудио и видео; Медия, уебсайт и дизайн; Хералди;
            Рецепция.
          </p>
          <p className='mt-4'>
            Повече за тях можете да прочетете във формата за кандидатстване.
          </p>
          <div className='flex justify-center mt-4'>
            <Link
              href='https://cfp.openfest.org/'
              className='bg-neon-green px-16 py-4 rounded-md'
            >
              Кандидатствайте
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
