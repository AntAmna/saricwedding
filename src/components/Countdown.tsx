import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Text } from '@mantine/core';

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
    <Text m={0} ta="center" fz="md" lts={3} tt="uppercase" className="m-0 text-justify text-[15px] font-ebGaramond tracking-[3px] uppercase">
      {days === 0 ? 'Dan D' : `Još ${days} dan${days === 1 ? '' : 'a'}!`}
    </Text>
  )
};

export default Countdown;
