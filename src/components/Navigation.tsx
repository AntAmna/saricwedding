import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Burger,
  Group,
  Stack,
  Title,
  NavLink, Transition,
} from '@mantine/core';

import { titles, hrefs } from './utils';

type Props = {
  toggleOpenMenu: () => void,
  openMenu: boolean,
}

const Navigation = ({ toggleOpenMenu, openMenu }: Props) => {
  const location = useLocation();

  return (
    <Group w="100%" py={16} gap={8} px={24} justify="space-between" pos="relative">
      <Burger opened={openMenu} onClick={toggleOpenMenu} />
      <Transition
        mounted={openMenu}
        transition="scale-y"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Stack style={styles} pos="absolute" top={65} p={16} left={0} w="100%" h="calc(100vh - 65px)" bg="white" align="center">
            {hrefs.map((href) => (
              <NavLink
                style={{
                  borderBottom: location.pathname === href ? 'solid 2px black' : undefined,
                }}
                w="fit-content"
                href={href}
                key={href}
                label={titles[href]}
              />
            ))}
          </Stack>
        )}
      </Transition>
      <Title order={2} m={0} lts={4} fw={400}>{titles[location.pathname]}</Title>
      <Box w={30} />
    </Group>
  )
}

export default Navigation;
