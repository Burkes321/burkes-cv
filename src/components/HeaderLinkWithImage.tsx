import Image from 'next/image';
import Link from 'next/link';

import css from './HeaderLinkWithImage.module.scss';

type Props = {
  href: string;
  image: any; // have to type an image as any in next. It must be a default import SVG
  text: string;
  alt: string;
};

export const HeaderLinkWithImage = ({ href, image, text, alt }: Props) => (
  // TODO: add some background on hover to show it is a link
  <Link href={href} className={css.link}>
    <Image src={image} alt={alt} width={32} height={32} />
    <p className={css.text}>{text}</p>
  </Link>
);
