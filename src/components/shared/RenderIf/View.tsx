import { ReactNode } from 'react';

type RenderIfProps = {
  condition: boolean,
  children: ReactNode | ReactNode[],
}

const RenderIf = (props: RenderIfProps) => {
  const { condition, children } = props;

  if (!condition) {
    return null;
  }

  // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-no-useless-fragment
  return <>{children}</>;
}

export default RenderIf;
