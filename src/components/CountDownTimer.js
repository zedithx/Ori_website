import React from 'react';
import {useCountdown} from "@/hooks/useCountdown";

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
        <tr className='md:text-[4.5vw]'>
          <td className='md:px-4'>00</td>
          <td className='md:px-4'>00</td>
          <td className='md:px-4'>00</td>
          <td className='md:px-4'>00</td>
      </tr>
    )
  } else {
    return (
      <tr className='md:text-[4.5vw]'>
          <td className='md:px-4'>{days}</td>
          <td className='md:px-4'>{hours}</td>
          <td className='md:px-4'>{minutes}</td>
          <td className='md:px-4'>{seconds}</td>
      </tr>
    );
  }
};