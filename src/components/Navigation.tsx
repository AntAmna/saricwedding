import React from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { useLocation } from 'react-router-dom';
import { Layout, Button, Menu } from 'antd';

import { headerItems } from './utils';

const { Header } = Layout;

type Props = {
  toggleOpenMenu: () => void,
  openMenu: boolean,
}

const titles: Record<string, string> = {
  '/saricwedding': 'A & A',
  '/saricwedding/protokol': 'Protokol',
  '/saricwedding/wedding-party': 'Svatovi',
  '/saricwedding/qa': 'Q + A',
  '/saricwedding/rsvp': 'RSVP',
}

const Navigation = ({ toggleOpenMenu, openMenu }: Props) => {
  const location = useLocation();

  const items = headerItems.map((item) => ({
    ...item,
    onClick: () => {
      toggleOpenMenu();
      item.onClick();
    },
  }))

  return (
    <Header className="w-full py-4 px-6 relative">
      <div className="flex items-center justify-between">
        <Button className="relative text-[30px] z-[100]" onClick={toggleOpenMenu}>
          {openMenu ? <RiCloseLine /> : <RiMenuLine />}
        </Button>
        {openMenu && (
          <div className="absolute top-0 left-0 w-full h-screen z-50 bg-white flex flex-col items-center justify-center">
            <Menu className="font-ebGaramond p-6 flex flex-col items-center justify-center gap-4 text-[14px] tracking-[1px] leading-[21px]" items={items} />
          </div>
        )}
        <span className="m-0 text-xl text-center tracking[-1.5px] leading-[40px]">{titles[location.pathname]}</span>
        <div className="w-[30px]" />
      </div>
    </Header>
  )
}

export default Navigation;
