import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function ButtonsGrid({ children }: Props) {
  return <div className="grid grid-cols-4 grid-rows-6 gap-3">{children}</div>;
}

export default ButtonsGrid;
