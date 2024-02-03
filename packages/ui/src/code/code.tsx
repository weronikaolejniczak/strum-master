'use client';

import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export function Code({ children, className }: Props) {
  return <code className={className}>{children}</code>;
}
