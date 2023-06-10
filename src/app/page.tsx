import Head from 'next/head';
import css from './page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import githubLogo from '../../public/githubLogo.svg';
import linkedinLogo from '../../public/linkedinLogo.svg';
import gmailLogo from '../../public/gmailLogo.svg';

import { HeaderLinkWithImage } from '~/components';

const Home = () => (
  <main className={css.pageContainer}>
    {/* TODO: this could be better with a flex container for all header
    and aligning the title to the flex start */}
    <h1 className={css.header}>Sam Burke</h1>
    <hr className={css.headerUnderline} />
    <div className={css.linksContainer}>
      <HeaderLinkWithImage
        href="https://github.com/Burkes321"
        image={githubLogo}
        text="GitHub"
        alt="github logo"
      />
      <HeaderLinkWithImage
        href="https://www.linkedin.com/in/samuelburke332/"
        image={linkedinLogo}
        text="LinkedIn"
        alt="linkedin logo"
      />
      <HeaderLinkWithImage
        href="mailto:sam.burke99@gmail.com"
        image={gmailLogo}
        text="Email me"
        alt="gmail logo"
      />
    </div>
    <div className={css.bio}>
      Full-stack software engineer currently working at Emplifi in Czechia.
      Experience working as part of a team to develop complex data analytics
      applications for business users. Primary stack of React, Next js,
      Typescript, React query, node, express, and postgres. Willing to learn
      anything
    </div>
    <div className={css.mainContentContainer}>
      <div className={css.experienceContainer}>
        <h2 className={css.experienceTitle}>Experience</h2>
        <h3 className={css.experienceSectionHeader}>Emplifi</h3>
        {/* TODO: want to put a company logo on each */}
        <p className={css.experienceMeta}>
          Software Engineer <br />
          Prague, Czechia <br />
          January 2023 - Present
        </p>
      </div>
      <div>
        <h2 className={css.skillsTitle}>Skills</h2>
      </div>
    </div>
  </main>
);

export default Home;
