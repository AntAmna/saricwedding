import React from 'react';

import Countdown from './Countdown';

const Description = () => (
  <div className="pb-[10px] flex-col flex gap-2 px-[18px]">
    <h1 className="mb-[28px] text-[39px] text-center mt-[24px] tracking-[8px] uppercase leading-[39px]">
      Amna & Amer
    </h1>
    <p className="m-0 text-center text-[15px] font-ebGaramond tracking-[3px] uppercase">
      August 17, 2024 • Tuzla, Bosna i Hercegovina
    </p>
    <Countdown />
  </div>
);

export default Description;
