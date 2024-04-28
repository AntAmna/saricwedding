import React from 'react';
import { Stack, Text, Title } from '@mantine/core';

import { amnaAmer2 } from '../assets';
import Description from './Description';
import { descriptionText } from './utils';

const LandingPage = () => (
  <>
    <img src={amnaAmer2} alt="" className="object-cover w-full aspect-[3/2]" />
    <Description />
    <Text fz="md" m={0} px={24} ta="center" lts={3}>
      {descriptionText}
    </Text>
    <Stack gap={28} px={18} pt={25}>
      <Stack gap={8}>
        <Title order={2} lts={4} m={0} ta="center" tt="uppercase">Vjenčanje</Title>
        <Text m={0} fz="md" lts={3} ta="center">August 17, 2024</Text>
        <Text m={0} ta="center" fz="md" lts={3}>18:30 - 02:00</Text>
      </Stack>
      <Text m={0} ta="center" fz="sm" lts={1}>
        Svadbeni Salon &quot;Ljubavna Priča&quot;
        <br />
        20 Mije Keroševića Guje, 75000 Tuzla,
        <br />
        Bosna i Hercegovina
      </Text>
    </Stack>
  </>
);

export default LandingPage;
