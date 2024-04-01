import React from 'react';
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

  console.log(link);

  return (
    <div className="flex flex-row gap-4 items-center p-4 border rounded border-gray-200">
      {icon}
      <div className="flex flex-row items-center gap-2">
        <span className="text-lg">{text}</span>
        <RenderIf condition={subText !== ''}>
          <span className="text-gray-500 text-sm">{`(${subText})`}</span>
        </RenderIf>
      </div>
    </div>
  )
}

Link.defaultProps = {
  subText: '',
}

export default Link;
