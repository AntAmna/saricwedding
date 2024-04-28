import React from 'react';
import { Text, NavLink, Center } from '@mantine/core';
import { useLocation } from 'react-router-dom';

import { hrefs, titles } from './utils';

const Links = () => {
  const location = useLocation();

  return (
    <div className="border-t border-t-gray-400">
      {hrefs.map((href) => (
        <NavLink
          p={8}
          href={href}
          style={{
            borderBottom: 'solid 1px lightslategray',
          }}
          key={href}
          label={(
            <Center>
              <Text
                w="fit-content"
                style={{ borderBottom: location.pathname === href ? 'solid 2px black' : undefined }}
                c="black"
                lts={3}
                fz="sm"
                pt={8}
                px={8}
                pb={6}
              >
                {titles[href]}
              </Text>
            </Center>
          )}
        />
      ))}
    </div>
  )
}

export default Links;
