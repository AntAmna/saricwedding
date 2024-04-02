import React from 'react';

import { amnaAmer2 } from '../assets';
import Description from './Description';
import Links from './Links';
import { descriptionText } from './utils';

const LandingPage = () => (
  <div className="w-full flex flex-col gap-8">
    <img src={amnaAmer2} alt="" className="object-cover w-full aspect-[3/2]" />
    <Description />
    <p className="m-0 px-6 text-center font-ebGaramond text-[15px] tracking-[3px] leading-[22.5px]">
      {descriptionText}
    </p>
    <div className="flex px-[18px] pt-[25px] flex-col gap-[28px]">
      <div className="flex flex-col gap-2">
        <h1 className="m-0 text-center text-[24px] tracking-[4px] leading-[24px] uppercase">Vjenčanje</h1>
        <p className="m-0 text-center font-ebGaramond text-[15px] tracking-[3px] leading-[15px]">August 17, 2024</p>
        <span className="m-0 text-center font-ebGaramond text-[15px] tracking-[3px] leading-[15px]">18:30 - 02:00</span>
      </div>
      <p className="m-0 font-ebGaramond text-center text-[14px] tracking-[1px] leading-[21px]">
        Svadbeni Salon &quot;Ljubavna Priča&quot;
        <br />
        20 Mije Keroševića Guje, 75000 Tuzla,
        <br />
        Bosna i Hercegovina
      </p>
    </div>
    <Links />
  </div>
);

export default LandingPage;
