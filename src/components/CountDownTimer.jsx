'use client';
import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ props }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-11-02T09:30:00+03:00');
    const countDownIntervalTime = 1000;

    const updateCountDown = () => {
      const now = new Date();

      const diff = targetDate.getTime() - now.getTime();

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      setHours(h);

      const m = Math.floor((diff / (1000 * 60)) % 60);
      setMinutes(m);
    };

    // Set time
    updateCountDown();

    // Set interval
    const interval = setInterval(updateCountDown, countDownIntervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className='container flex flex-col gap-4 sm:gap-8'>
        <h2 className='text-center text-2xl text-blue-2 sm:text-start sm:text-4xl'>
          {props.title}
        </h2>
        <div className='flex flex-col items-center justify-evenly gap-8 lg:flex-row'>
          <div className='relative h-48 w-48 lg:h-64 lg:w-64'>
            <div className='absolute inset-0 rotate-[-45deg] overflow-hidden rounded-full bg-[#A9CDF7]'>
              <div className='absolute left-0 top-0 h-full w-1/2'></div>
              <div className='absolute left-0 top-0 h-full w-1/2 bg-[#C8E0FC]'></div>
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-center font-bold'>
                <p className='pb-1 pt-2 text-6xl text-white lg:pb-3 lg:pt-4 lg:text-8xl'>
                  {days}
                </p>
                <p className='text-2xl font-light text-white lg:text-5xl'>
                  {props.days}
                </p>
              </span>
            </div>
          </div>
          <div className='relative h-48 w-48 lg:h-64 lg:w-64'>
            <div className='absolute inset-0 rotate-[-45deg] overflow-hidden rounded-full bg-[#A9CDF7]'>
              <div className='absolute left-0 top-0 h-full w-full'></div>
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-center font-bold text-gray-800'>
                <p className='pb-1 pt-2 text-6xl text-white lg:pb-3 lg:pt-4 lg:text-8xl'>
                  {hours}
                </p>
                <p className='text-2xl font-light text-white lg:text-5xl'>
                  {props.hours}
                </p>
              </span>
            </div>
          </div>
          <div className='relative h-48 w-48 lg:h-64 lg:w-64'>
            <div className='absolute inset-0 rotate-[-45deg] overflow-hidden rounded-full bg-[#A9CDF7]'>
              <div className='absolute left-0 top-0 h-full w-1/2'></div>
              <div className='absolute right-0 top-0 h-full w-1/2 bg-[#C8E0FC]'></div>
            </div>
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-center font-bold text-gray-800'>
                <p className='pb-1 pt-2 text-6xl text-white lg:pb-3 lg:pt-4 lg:text-8xl'>
                  {minutes}
                </p>
                <p className='text-2xl font-light text-white lg:text-5xl'>
                  {props.minutes}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDownTimer;
