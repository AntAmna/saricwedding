import React from 'react';
import { Stack, Text, Title } from '@mantine/core';

import Countdown from './Countdown';

const Description = () => (
  <Stack pb={10} gap={2} px={18}>
    <Title tt="uppercase" ta="center" mb={28} order={1} mt={24} lts={8}>Amna & Amer</Title>
    <Text fz="md" lts={3} m={0} ta="center" tt="uppercase">August 17, 2024 • Tuzla, Bosna i Hercegovina</Text>
    <Countdown />
  </Stack>
);

export default Description;
