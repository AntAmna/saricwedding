import React from 'react';

import Description from '../Description';
import Links from '../Links';

import './LandingPage.scss';

const LandingPage = () => (
  <div className="max-w-[640px] w-full overflow-hidden landing-page mb-[68px]">
    <div className="flex flex-row items-center justify-center w-full relative landing-page__images">
      <div className="h-[190px] w-[156px] p-[10px] mt-[68px] polaroid-image">
        <img src="" alt="" />
      </div>
    </div>
    <h1 className="m-0 text-[30px] text-center pt-[28px] pb-4 px-8">Amna & Amer</h1>
    <Description />
    <Links />
  </div>
);

export default LandingPage;
