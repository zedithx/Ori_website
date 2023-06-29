import React from 'react';
import {useCountdown} from "@/hooks/useCountdown";
import countdownshape from "../../public/images/countdown-shape.png"
import Image from 'next/image'

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
        <tr className='md:text-[4.5vw]'>
            <td className='md:px-4'><Image alt='countdownshape' src={countdownshape}/>00</td>
          <td className='md:px-4'>00</td>
          <td className='md:px-4'>00</td>
          <td className='md:px-4'>00</td>
      </tr>
    )
  } else {
     let days_string = String(days);
     if (days_string < 10){
         days_string = '0' + days_string
     }
     let hours_string = String(hours)
      if (hours_string < 10){
         hours_string = '0' + hours_string
     }
      let minutes_string = String(minutes)
      if (minutes_string < 10){
         minutes_string = '0' + minutes_string
     }
      let seconds_string = String(seconds)
      if (seconds_string < 10){
         seconds_string = '0' + seconds_string
     }
    return (
      <tr className='md:text-[3vw] text-[7vw] md:gap-4'>
          <td className='px-3 md:px-8'>
            <div className='w-[9vw] md:w-[4vw] inline-block relative mr-1 md:mr-3'>
                <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{days_string[0]}</h1>
            </div>
              <div className='w-[9vw] md:w-[4vw] inline-block relative'>
                  <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                  <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{days_string[1]}</h1>
                </div>
          </td>
            <td className='px-2 md:px-8'>
            <div className='w-[9vw] md:w-[4vw] inline-block relative mr-1 md:mr-3'>
                <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{hours_string[0]}</h1>
            </div>

              <div className='w-[9vw] md:w-[4vw] inline-block relative'>
                  <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                  <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{hours_string[1]}</h1>
                </div>
          </td>
          <td className='px-2 md:px-8'>
            <div className='w-[9vw] md:w-[4vw] inline-block relative mr-1 md:mr-3'>
                <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{minutes_string[0]}</h1>
            </div>

              <div className='w-[9vw] md:w-[4vw] inline-block relative'>
                  <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                  <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{minutes_string[1]}</h1>
                </div>
          </td>
          <td className='px-2 md:px-8'>
            <div className='w-[9vw] md:w-[4vw] inline-block relative mr-1 md:mr-3'>
                <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{seconds_string[0]}</h1>
            </div>

              <div className='w-[9vw] md:w-[4vw] inline-block relative'>
                  <Image layout='responsive' alt='countdownshape' src={countdownshape}/>
                  <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto'>{seconds_string[1]}</h1>
                </div>
          </td>
      </tr>
    );
  }
};