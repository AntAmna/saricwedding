import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '../LandingPage';
import Protokol from '../Protokol';
import Layout from '../Layout';
import WeddingParty from '../WeddingParty';
import FAQ from '../FAQ';
import RSVP from '../RSVP';

export const descriptionText = 'Dobrodošli na našu stranicu za vjenčanja! Sretni smo što možemo s vama podijeliti ovo uzbudljivo vrijeme i stvorili smo prostor koji dijeli sve što trebate znati o našem velikom danu.';

export const hrefs = [
  '/saricwedding',
  '/saricwedding/protokol',
  '/saricwedding/wedding-party',
  '/saricwedding/qa',
  '/saricwedding/rsvp',
]

export const routerHrefs = {
  home: hrefs[0],
  protocol: hrefs[1],
  weddingParty: hrefs[2],
  qa: hrefs[3],
  rsvp: hrefs[4],
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: routerHrefs.home, element: <LandingPage /> },
      { path: routerHrefs.protocol, element: <Protokol /> },
      { path: routerHrefs.weddingParty, element: <WeddingParty /> },
      { path: routerHrefs.qa, element: <FAQ /> },
      { path: routerHrefs.rsvp, element: <RSVP /> },
    ],
  },
])

export const titles: Record<string, string> = {
  '/saricwedding': 'A & A',
  '/saricwedding/protokol': 'Protokol',
  '/saricwedding/wedding-party': 'Svatovi',
  '/saricwedding/qa': 'Pitanja i odgovori',
  '/saricwedding/rsvp': 'Potvrdite dolazak',
}
