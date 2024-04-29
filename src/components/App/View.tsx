import React from 'react';

import LandingPage from '../LandingPage';

const App = () => (
  <div className="App w-full h-screen bg-blue-50 flex justify-center">
    <div className="border-x h-fit overflow-y-auto bg-white border-x-gray-300">
      <LandingPage />
    </div>
  </div>
);

export default App;
