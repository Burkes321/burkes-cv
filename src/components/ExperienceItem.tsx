import { ReactNode } from 'react';
import { Text } from './typography';

import css from './ExperienceItem.module.scss';

interface Props {
  companyName: string;
  meta: ReactNode;
  children: ReactNode;
}

export const ExperienceItem = ({ companyName, meta, children }: Props) => (
  <>
    <Text className={css.header} fontSize="32px">
      {companyName}
    </Text>
    <Text fontSize="20px">{meta}</Text>
    {children}
  </>
);
