import Image from 'next/image';
import Link from 'next/link';

import css from './HeaderLinkWithImage.module.scss';
import { Text } from './typography';

interface Props {
  href: string;
  image: any; // have to type an image as any in next. It must be a default import SVG
  text: string;
  alt: string;
}

export const HeaderLinkWithImage = ({ href, image, text, alt }: Props) => (
  // TODO: add some color and underline to show it is a link
  // also maybe change the color on hover
  <Link href={href} className={css.link}>
    <Image src={image} alt={alt} width={32} height={32} />
    <Text fontSize="32px" className={css.text}>
      {text}
    </Text>
  </Link>
);
