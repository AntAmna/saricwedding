import React from 'react';
import {
  Anchor,
  Group,
  Stack,
  Text,
} from '@mantine/core';

import { Viber } from '../assets';

const RSVP = () => (
  <Stack p={16} align="center" justify="center" gap={24} flex={1}>
    <Text ta="center" fz="md" lts={1} pb={24}>
      Svoj dolazak možete potvrditi putem Viber-a, klikom na jedan od dva navedena linka.
      <br />
      <br />
      Molimo Vas da svoj dolazak potvrdite najkasnije do
      <b>{' 17.07.2024.'}</b>
    </Text>
    <Anchor c="#7360f2" underline="always" href="viber://chat?number=+38762541492">
      <Group>
        <Viber />
        Amna Šubić
      </Group>
    </Anchor>
    <Anchor c="#7360f2" underline="always" href="viber://chat?number=+38762931100">
      <Group>
        <Viber />
        Amer Sarić
      </Group>
    </Anchor>
  </Stack>
)

export default RSVP;
