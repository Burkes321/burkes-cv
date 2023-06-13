import { ReactNode } from 'react';
import { Text } from './typography';

interface Props {
  companyName: string;
  meta: ReactNode;
  // TODO: here for future, not implemented yet
  logo?: any;
  // used for the detail
  children: ReactNode;
}

export const ExperienceItem = ({
  companyName,
  meta,
  logo,
  children,
}: Props) => <Text fontSize="48px">{companyName}</Text>;
