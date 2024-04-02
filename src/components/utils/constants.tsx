import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '../LandingPage';
import Protokol from '../Protokol';
import Layout from '../Layout';

export const descriptionText = 'Našim prijateljima i obitelji: Tako smo uzbuđeni što možemo proslaviti naše vjenčanje s vama. Ovdje pronađite sve detalje koje trebate znati o našem velikom danu.';

export const instruction1 = 'Kliknite na sljedeći link, kako biste vidjeli protokol';

export const instruction2 = 'Kliknite na jedan od sljedećih linkova, kako biste potvrdili svoj dolazak';

export const instruction3 = 'Kliknite na sljedeći link, kako biste sačuvali datum u Vaš kalendar';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/saricwedding', element: <LandingPage /> },
      { path: '/saricwedding/protokol', element: <Protokol /> },
      { path: '/saricwedding/wedding-party', element: <div /> },
      { path: '/saricwedding/qa', element: <div /> },
      { path: '/saricwedding/rsvp', element: <div /> },
    ],
  },
])

export const headerItems = [
  { key: 'home', label: 'Početna', onClick: () => router.navigate('/saricwedding') },
  { key: 'protokol', label: 'Protokol', onClick: () => router.navigate('/saricwedding/protokol') },
  { key: 'wedding-party', label: 'Svatovi', onClick: () => router.navigate('/saricwedding/wedding-party') },
  { key: 'qa', label: 'Q + A', onClick: () => router.navigate('/saricwedding/qa') },
  { key: 'rsvp', label: 'RSVP', onClick: () => router.navigate('/saricwedding/rsvp') },
]
