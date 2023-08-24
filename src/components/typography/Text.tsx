import { ReactNode } from 'react';

interface Props {
  fontSize?: string;
  fontWeight?: number;
  children: ReactNode;
  className?: string;
}

export const Text = ({
  // TODO: once all the inline styles are removed, also remove the style props
  fontSize = '16px',
  fontWeight = 400,
  children,
  className,
}: Props) => <p className={className}>{children}</p>;
