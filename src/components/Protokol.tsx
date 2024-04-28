import React, { ReactElement } from 'react';
import { Stack, Text, Title } from '@mantine/core';

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
  <Stack gap={8} align="center">
    <Icon className="w-8 h-8" />
    <Title order={2} px={18} lts={4}>{time}</Title>
    <Text fz="md" lts={1} ta="center" m={0}>{label}</Text>
  </Stack>
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
    <Stack gap={32} align="center" pt={56} pb={56}>
      {protokolItems.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProtokolItem {...item} />
      ))}
    </Stack>
  </>
)

export default Protokol;
