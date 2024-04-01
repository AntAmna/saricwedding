import React from 'react';

import { descriptionText } from '../utils';
import Countdown from '../Countdown';

const Description = () => (
  <div className="flex flex-col gap-6 px-8 pb-8">
    <h3 className="m-0 text-center text-5xl font-sacramento">Dobrodošli u naše zauvijek</h3>
    <Countdown />
    <p className="m-0 first-letter:text-[3rem] text-justify first-letter:font-sacramento text-lg first-letter:float-left">{descriptionText}</p>
  </div>
);

export default Description;
