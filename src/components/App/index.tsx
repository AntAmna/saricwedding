import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Group } from '@mantine/core';

import { router } from '../utils';

import './App.scss';

const App = () => (
  <Group bg="blue.1" w="100%" mih="100vh" justify="center">
    <RouterProvider router={router} />
  </Group>
)

export default App;
