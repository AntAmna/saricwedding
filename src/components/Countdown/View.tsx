import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Countdown = () => {
  const [state, setState] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment('2024-08-17T18:30:00', 'YYYY-MM-DDThh:mm:ss');
      const now = moment();
      const countdown = moment(then).diff(now);
      setState({
        months: moment.duration(countdown).months(),
        days: moment.duration(countdown).days(),
        hours: moment.duration(countdown).hours(),
        minutes: moment.duration(countdown).minutes(),
        seconds: moment.duration(countdown).seconds(),
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  const {
    months, days, hours, minutes, seconds,
  } = state;

  const addPluralEnding = (
    value: number,
    endingForZero: string,
    endingForOne: string,
    endingForLTFive: string,
    endingForGTFive: string,
  ) => {
    if (value === 0) {
      return endingForZero;
    }
    if ([1, 21, 31, 41, 51].includes(value)) {
      return endingForOne;
    }
    if ([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(value)) {
      return endingForLTFive;
    }
    if (value > 5) {
      return endingForGTFive;
    }
    return '';
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex gap-4">
        <div className="rounded-full h-20 w-20 flex flex-col items-center justify-center text-xl border border-blue-950">
          {months}
          <span className="text-sm">{`mjesec${addPluralEnding(months, 'i', '', 'a', 'i')}`}</span>
        </div>
        <div className="rounded-full h-20 w-20 flex flex-col items-center justify-center text-xl border border-blue-950">
          {days}
          <span className="text-sm">{`dan${addPluralEnding(days, 'a', '', 'a', 'a')}`}</span>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="rounded-full h-20 w-20 flex flex-col items-center justify-center text-xl border border-blue-950">
          {hours}
          <span className="text-sm">{`sat${addPluralEnding(hours, 'i', '', 'a', 'i')}`}</span>
        </div>
        <div className="rounded-full h-20 w-20 flex flex-col items-center justify-center text-xl border border-blue-950">
          {minutes}
          <span className="text-sm">{`minut${addPluralEnding(minutes, 'a', '', 'e', 'a')}`}</span>
        </div>
        <div className="rounded-full h-20 w-20 flex flex-col items-center justify-center text-xl border border-blue-950">
          {seconds}
          <span className="text-sm">{`sekund${addPluralEnding(seconds, 'i', 'a', 'e', 'i')}`}</span>
        </div>
      </div>
    </div>
  )
};

export default Countdown;
