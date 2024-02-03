'use client';

import React, { ReactNode } from 'react';

type Props = {
  className?: string;
  title: string;
  children: ReactNode;
  href: string;
};

export const Card = ({ className, title, children, href }: Props) => {
  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
};
