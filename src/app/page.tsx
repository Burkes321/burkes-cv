import css from './page.module.scss';

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
      <div>
        {/* TODO: experience items should be their own components */}
        <div>
          <h2 className={css.sectionTitle}>Experience</h2>
          <h3 className={css.experienceItemHeader}>Emplifi</h3>
          {/* TODO: want to put a company logo */}
          <p className={css.experienceMeta}>
            Software Engineer <br />
            Prague, Czechia <br />
            January 2023 - Present
          </p>
          <ul className={css.experienceInfo}>
            <li>
              Maintaining and upgrading large parts of the existing codebase as
              part of a team using React, Typescript, node js, redux, redux
              saga, and react query.
            </li>
            <li>
              Working on implementation of a large-scale design overhaul of
              existing sections of the application. Taking wireframes from
              designers and turning them into fully functional web applications.
            </li>
            <li>
              Responsible in part for estimating what work can be done in our
              sprints.
            </li>
            <li>
              Leading Epics from requirements gathering with designers, ticket
              creation
            </li>
            <li>
              Got up to speed fast and was able to learn and use unfamiliar
              technology (redux, redux saga, react query) to start contributing
              / solving tickets in the first week with the company
            </li>
          </ul>
        </div>

        <div>
          <h3 className={css.experienceItemHeader}>Gooddata</h3>
          {/* TODO: want to put a company logo */}
          <p className={css.experienceMeta}>
            Junior Software Engineer <br />
            Prague, Czechia <br />
            August 2021 - December 2022
          </p>
          <ul className={css.experienceInfo}>
            <li>
              Developed custom dashboards as part of a team for customers, based
              on their requests and needs primarily using React JS with
              typescript.
            </li>
            <li>
              Experience using the GoodData UI SDK for creating custom
              components for data visualisation. (SDK is open source).
            </li>
            <li>
              Customised components from third party libraries such as
              ‘Recharts’ to be used in GoodData applications.
            </li>
            <li>
              Optimised SQL queries generated on the front end of one
              application to reduce user wait times when submitting custom
              queries.
            </li>
            <li>
              Experience working with and customising many third party libraries
              to make them suit our use cases, such as react router, emotion
              CSS, styled components, recharts, and more.
            </li>
          </ul>
        </div>

        <div>
          <h3 className={css.experienceItemHeader}>
            Self Employed / Freelancer
          </h3>
          <p className={css.experienceMeta}>
            Work with UK based firm &ldquo;CloudGuard AI&rdquo; <br />
            Prague, Czechia
          </p>
          <ul className={css.experienceInfo}>
            <li>
              Developed custom dashboards as part of a team for customers, based
              on their requests and needs primarily using React JS with
              typescript.
            </li>
            <li>
              Experience using the GoodData UI SDK for creating custom
              components for data visualisation. (SDK is open source).
            </li>
            <li>
              Customised components from third party libraries such as
              ‘Recharts’ to be used in GoodData applications.
            </li>
            <li>
              Optimised SQL queries generated on the front end of one
              application to reduce user wait times when submitting custom
              queries.
            </li>
            <li>
              Experience working with and customising many third party libraries
              to make them suit our use cases, such as react router, emotion
              CSS, styled components, recharts, and more.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className={css.sectionTitle}>Skills</h2>
      </div>
    </div>
  </main>
);

export default Home;
