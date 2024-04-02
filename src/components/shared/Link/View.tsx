import React from 'react';
import { NavLink } from 'react-router-dom';

import RenderIf from '../RenderIf';

type LinkProps = {
  link: string,
  text: string,
  subText?: string,
  icon: React.ReactNode,
}

const Link = (props: LinkProps) => {
  const {
    link,
    icon,
    text,
    subText,
  } = props;

  return (
    <NavLink to={link} className="flex flex-row gap-4 items-center p-4 border rounded border-gray-200">
      {icon}
      <div className="flex flex-row items-center gap-2">
        <span className="text-lg">{text}</span>
        <RenderIf condition={!!subText}>
          <span className="text-gray-500 text-sm">{`(${subText})`}</span>
        </RenderIf>
      </div>
    </NavLink>
  )
}

Link.defaultProps = {
  subText: undefined,
}

export default Link;
