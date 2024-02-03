'use client';

import React, { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
