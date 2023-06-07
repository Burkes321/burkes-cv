import Head from 'next/head';
import css from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import githubLogo from '../../public/githubLogo.svg';
import linkedinLogo from '../../public/linkedinLogo.svg';
import gmailLogo from '../../public/gmailLogo.svg';

export default function Home() {
  return (
    <main className={css.pageContainer}>
      <h1 className={css.header}>Sam Burke</h1>
      <hr className={css.headerUnderline} />
      <div className={css.linksContainer}>
        {/* TODO: make a component for each link with a variable width becuase of the variable text content */}
        <Link href="https://github.com/Burkes321" className={css.linkContainer}>
          <Image src={githubLogo} alt="github logo" width={32} height={32} />
          <p>GitHub</p>
        </Link>
        <div className={css.linkContainer}>
          <Image
            src={linkedinLogo}
            alt="linkedin logo"
            width={32}
            height={32}
          />
          <p>LinkedIn</p>
        </div>
        <div className={css.linkContainer}>
          <Image src={gmailLogo} alt="gmail logo" width={32} height={32} />
          <p>Email me</p>
        </div>
      </div>
    </main>
  );
}
