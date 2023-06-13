import githubLogo from '../../public/githubLogo.svg';
import linkedinLogo from '../../public/linkedinLogo.svg';
import gmailLogo from '../../public/gmailLogo.svg';

import { HeaderLinkWithImage, ExperienceItem } from '~/components';
import { Text } from '~/components/typography';

import css from './page.module.scss';

const EmplifiMeta = (
  <Text fontSize="20px">
    Software Engineer <br />
    Prague, Czechia <br />
    January 2023 - Present
  </Text>
);

const GoodDataMeta = (
  <Text fontSize="20px">
    Junior Software Engineer <br />
    Prague, Czechia <br />
    August 2021 - December 2022
  </Text>
);

const SelfEmployedMeta = (
  <Text fontSize="20px">
    Work with UK based firm &ldquo;CloudGuard AI&rdquo; <br />
    Prague, Czechia
  </Text>
);

const Home = () => (
  <main className={css.pageContainer}>
    {/* TODO: this could be better with a flex container for all header
    and aligning the title to the flex start */}
    <Text fontSize="72px" className={css.header}>
      Sam Burke
    </Text>
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

    <Text className={css.bio} fontSize="20px">
      Full-stack software engineer currently working at Emplifi in Czechia.
      Experience working as part of a team to develop complex data analytics
      applications for business users. Primary stack of React, Next js,
      Typescript, React query, node, express, and postgres. Willing to learn
      anything.
    </Text>

    <div className={css.mainContentContainer}>
      <div>
        <Text fontSize="48px">Experience</Text>
        <ExperienceItem companyName="Emplifi" meta={EmplifiMeta}>
          {' '}
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
        </ExperienceItem>

        <ExperienceItem companyName="GoodData" meta={GoodDataMeta}>
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
        </ExperienceItem>

        <ExperienceItem
          companyName="Self Employed / Freelancer"
          meta={SelfEmployedMeta}
        >
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
        </ExperienceItem>
      </div>
      <div>
        <Text fontSize="48px">Skills</Text>

        <Text className={css.skillsSectionSubHeader} fontSize="32px">
          Front-end
        </Text>
      </div>
    </div>
  </main>
);

export default Home;
