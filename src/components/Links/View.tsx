import React from 'react';

import { LinkItem } from '../shared';
import { Information, Viber } from '../../assets';

const Links = () => (
  <div className="flex flex-col gap-4 px-8">
    <LinkItem link="" text="Protokol vjenčanja" icon={<Information className="h-8 w-8" />} />
    {/* <AddToCalendarButton */}
    {/*  availability="busy" */}
    {/*  name="Vjenčanje Amna i Amer" */}
    {/*  description="Svadbeni Salon 'Ljubavna Priča', Tuzla" */}
    {/*  location="Mije Keroševića Guje 20, Tuzla 75000" */}
    {/*  label="Dodajte datum u kalendar" */}
    {/*  startTime="18:30" */}
    {/*  endDate="2024-08-18" */}
    {/*  endTime="02:30" */}
    {/*  startDate="2024-08-17" */}
    {/*  options={['Google']} */}
    {/*  listStyle="modal" */}
    {/*  styleLight="--btn-background: #fff; --btn-text: #6b7280; --font: Playfair Display, serif; --base-font-size-l: 18px; --base-font-size-m: 18px; --base-font-size-s: 18px; --btn-shadow: none;" */}
    {/* /> */}
    {/* <LinkItem link="" text="Dodajte datum u kalendar" icon={<Calendar className="h-8 w-8" />} /> */}
    <LinkItem link="" text="Potvrdite Vaš dolazak" subText="Amna" icon={<Viber className="text-viber-purple h-8 w-8" />} />
    <LinkItem link="" text="Potvrdite Vaš dolazak" subText="Amer" icon={<Viber className="text-viber-purple h-8 w-8" />} />
  </div>
)

export default Links;
