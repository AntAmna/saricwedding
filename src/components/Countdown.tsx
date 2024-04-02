import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Countdown = () => {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment('2024-08-17T18:30:00', 'YYYY-MM-DDThh:mm:ss');
      const now = moment();
      const countdown = moment(then).diff(now);
      setDays(Number(moment.duration(countdown).asDays().toFixed()));
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="m-0 text-justify text-[15px] font-ebGaramond tracking-[3px] uppercase">
        {days === 0 ? 'Dan D' : `Još ${days} dan${days === 1 ? '' : 'a'}!`}
      </div>
    </div>
  )
};

export default Countdown;
