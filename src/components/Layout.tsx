import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './Navigation';
import Footer from './Footer';

const Layout = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = () => setOpenMenu(!openMenu)

  return (
    <div className={`max-w-[500px] bg-white w-full ${openMenu ? 'h-screen overflow-y-hidden' : 'h-fit overflow-y-auto'}`}>
      <Navigation openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout;
