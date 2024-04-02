import React from 'react';
import { Button } from 'antd';

import { headerItems } from './utils';

const Links = () => (
  <div className="border-t border-t-gray-400">
    {headerItems.map(({ key, label, onClick }) => (
      <Button className="w-full border-b border-b-gray-400 font-ebGaramond p-2" onClick={onClick} key={key}>{label}</Button>
    ))}
  </div>
)

export default Links;
