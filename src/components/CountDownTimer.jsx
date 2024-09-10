'use client';
import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ props }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2024-11-02T09:30:00+03:00');

    const interval = setInterval(() => {
      const now = new Date();

      const diff = targetDate.getTime() - now.getTime();

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      setHours(h);

      const m = Math.floor((diff / (1000 * 60)) % 60);
      setMinutes(m);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='m-12 mb-20 pt-6'>
      {/* <span className='mb-12 mt-4 block text-3xl text-black'>
        {props.title}
      </span> */}
      <div className='flex justify-evenly'>
        <div className='relative h-[256px] w-[256px]'>
          <div className='absolute inset-0 rotate-[-45deg] overflow-hidden rounded-full bg-[#A9CDF7]'>
            <div className='absolute left-0 top-0 h-full w-1/2'></div>
            <div className='absolute left-0 top-0 h-full w-1/2 bg-[#C8E0FC]'></div>
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-center font-bold text-gray-800'>
              <p className='pb-[38px] pt-[14px] text-[85px]'>{days}</p>
              <p className='text-[36px] font-light'> {props.days}</p>
            </span>
          </div>
        </div>
        <div className='relative h-[256px] w-[256px]'>
          <div className='absolute inset-0 rotate-[-45deg] overflow-hidden rounded-full bg-[#A9CDF7]'>
            <div className='absolute left-0 top-0 h-full w-1/2'></div>
            <div className='absolute left-0 top-0 h-full w-1/2 bg-[#C8E0FC]'></div>
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-center font-bold text-gray-800'>
              <p className='pb-[38px] pt-[14px] text-[85px]'>{hours}</p>
              <p className='text-[36px] font-light'> {props.hours}</p>
            </span>
          </div>
        </div>
        <div className='relative h-[256px] w-[256px]'>
          <div className='absolute inset-0 rotate-[-45deg] overflow-hidden rounded-full bg-[#A9CDF7]'>
            <div className='absolute left-0 top-0 h-full w-1/2'></div>
            <div className='absolute left-0 top-0 h-full w-1/2 bg-[#C8E0FC]'></div>
          </div>
          <div className='absolute inset-0 flex items-center justify-center'>
            <span className='text-center font-bold text-gray-800'>
              <p className='pb-[38px] pt-[14px] text-[85px]'>{minutes}</p>
              <p className='text-[36px] font-light'> {props.minutes}</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDownTimer;
