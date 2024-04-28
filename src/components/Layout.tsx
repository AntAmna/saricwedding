import React from 'react';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import Navigation from './Navigation';
import Footer from './Footer';
import Links from './Links';

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Stack
      w="100%"
      gap={0}
      mih="100vh"
      h={opened ? '100vh' : 'fit-content'}
      maw={500}
      bg="white"
      style={{ overflowY: opened ? 'hidden' : 'auto' }}
    >
      <Navigation openMenu={opened} toggleOpenMenu={toggle} />
      <Stack w="100%" gap={32}>
        <Outlet />
        <Links />
      </Stack>
      <Footer />
    </Stack>
  )
}

export default Layout;
