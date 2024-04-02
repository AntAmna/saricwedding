import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '../utils';

import './App.scss';

const App = () => (
  <div className="App w-full min-h-screen bg-blue-50 flex justify-center">
    <RouterProvider router={router} />
  </div>
)

export default App;
