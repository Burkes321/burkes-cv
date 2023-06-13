import { ReactNode } from 'react';

interface Props {
  fontSize?: string;
  fontWeight?: number;
  children: ReactNode;
  className?: string;
}

export const Text = ({
  fontSize = '16px',
  fontWeight = 400,
  children,
  className,
}: Props) => (
  <p className={className} style={{ fontSize, fontWeight }}>
    {children}
  </p>
);
