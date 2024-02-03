import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const Input = ({ label, ...props }: Props) => {
  return (
    <label>
      <span>{label}</span>
      <input {...props} />
    </label>
  );
};
