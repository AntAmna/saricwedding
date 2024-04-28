import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, MantineProvider, rem } from '@mantine/core';
import '@mantine/core/styles.css';

import App from './components/App';

import './styles/index.scss';

const theme = createTheme({
  /** Put your mantine theme override here */
  focusRing: 'never',
  fontSizes: {
    sm: rem(14),
    md: rem(15),
  },
  fontFamily: 'Eb Garamond',
  headings: {
    fontFamily: 'Arya',
    fontWeight: '400',
    sizes: {
      h1: { fontSize: rem(39) },
      h2: { fontSize: rem(24) },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>,
);
