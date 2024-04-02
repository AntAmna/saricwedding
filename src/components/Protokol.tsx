import React, { ReactElement } from 'react';

import {
  Bouquet,
  Cake,
  Camera,
  FirstDance,
  Music,
  WeddingBells,
  Dinner,
} from '../assets';
import { IconProps } from './utils';
import Description from './Description';

type Props = {
  icon: (props: IconProps) => ReactElement,
  time: string,
  label: string,
}

const ProtokolItem = ({ icon: Icon, time, label }: Props) => (
  <div className="flex flex-col items-center gap-2">
    <Icon className="w-8 h-8" />
    <span className="text-[24px] px-[18px] tracking-[4px] leading-[24px]">{time}</span>
    <span className="m-0 text-center font-ebGaramond text-[15px] tracking-[1px] leading-[15px]">{label}</span>
  </div>
)

const protokolItems: Props[] = [
  { icon: WeddingBells, label: 'Svečana ceremonija', time: '18:30' },
  { icon: Camera, label: 'Slikanje sa mladencima', time: '19:00' },
  { icon: FirstDance, label: 'Prvi Ples', time: '20:30' },
  { icon: Dinner, label: 'Večera', time: '20:45' },
  { icon: Cake, label: 'Torta', time: '23:00' },
  { icon: Bouquet, label: 'Bacanje bidermajera', time: '23:30' },
  { icon: Music, label: 'After Party', time: '00:00' },
]

const Protokol = () => (
  <>
    <Description />
    <div className="flex flex-col w-full gap-8 items-center pt-[56px]">
      {protokolItems.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProtokolItem {...item} />
      ))}
    </div>
  </>
)

export default Protokol;
