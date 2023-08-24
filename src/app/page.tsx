'use client';

import githubLogo from '../../public/githubLogo.svg';
import linkedinLogo from '../../public/linkedinLogo.svg';
import gmailLogo from '../../public/gmailLogo.svg';

import {
  EmplifiMeta,
  GoodDataMeta,
  SelfEmployedMeta,
  BootcampMeta,
  UniversityMeta,
} from './const';
import { HeaderLinkWithImage, ExperienceItem } from '~/components';
import { Text } from '~/components/typography';

import css from './page.module.scss';

const Home = () => (
  <main className={css.pageContainer}>
    {/* TODO: this could be better with a flex container for all header
    and aligning the title to the flex start */}
    <Text className={css.header}>Sam Burke</Text>
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

    <Text className={css.bio}>
      Full-stack software engineer currently working at Emplifi in Czechia.
      Experience working as part of a team to develop complex data analytics
      applications for business users. Primary stack of React, Next js,
      Typescript, React query, node, express, and postgres. Willing to learn
      anything.
    </Text>

    <div className={css.mainContentContainer}>
      <div>
        <Text className={css.experienceHeader}>Experience</Text>
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
              Sole front end developer - over the course of 3 months created a
              custom data visualisation dashboard, which used data from
              Microsoft Sentinel to display cyber-security insights to
              customers. Next js, React, typescript and recharts were the main
              libraries used, along with others.
            </li>
          </ul>
        </ExperienceItem>

        <Text className={css.educationHeader}>Education</Text>

        {/* TODO: need logo */}
        <ExperienceItem
          companyName="Coding Bootcamp Praha, Data4You"
          meta={BootcampMeta}
        >
          <ul className={css.experienceInfo}>
            <li>
              Full-stack web development course taking students from little to
              no experience, to competent full-stack developers.
            </li>
            <li>
              Completed multiple projects throughout: Coffee shop website,
              database management system for veterinary clinic, real time flight
              tracking app
            </li>
            <li>
              Final full-stack project aggregating and recommending hiking
              routes to users around the Czech Republic.
            </li>
          </ul>
        </ExperienceItem>

        <ExperienceItem
          companyName="Lancaster University"
          meta={UniversityMeta}
        >
          <ul className={css.experienceInfo}>
            <li>
              Modules: Financial mathematics, stochastic processes, lebesgue
              integration, medical statistics, real analysis, complex analysis.
            </li>
            <li>
              Vector calculus final project and presentation to all other
              students on the course.
            </li>
          </ul>
        </ExperienceItem>
      </div>
      <div>
        <Text className={css.skillsSectionHeader}>Skills</Text>

        <Text className={css.skillsSectionSubHeader} fontSize="32px">
          Front-end
        </Text>

        {/* TODO: Insert the logo of each technology here */}
        <ul className={css.skillsList}>
          <li>HTML</li>
          <li>CSS (sass, css-in-js) </li>
          <li>Javascript / Typescript</li>
          <li>React, React Query</li>
          <li>Redux, React-redux, redux saga</li>
        </ul>

        <Text className={css.skillsSectionSubHeader} fontSize="32px">
          Back-end
        </Text>

        <ul className={css.skillsList}>
          <li>Node JS, Express</li>
          <li>PHP, Laravel</li>
          <li>MySQL, PostgresSQL, MongoDB</li>
        </ul>

        <Text className={css.skillsSectionSubHeader} fontSize="32px">
          Other Technologies
        </Text>

        <ul className={css.skillsList}>
          <li>Python - beginner knowledge</li>
          <li>C++ - beginner knowledge</li>
        </ul>

        <Text className={css.softSkillItem} fontSize="20px">
          Strong knowledge of Agile Methodology and the importance of keeping
          sprints on track
        </Text>

        <Text className={css.softSkillItem} fontSize="20px">
          Experience working with designers and stakeholders to turn designs
          into functional software
        </Text>

        <Text className={css.softSkillItem} fontSize="20px">
          Native English speaker, Czech A2 level
        </Text>

        <Text className={css.softSkillItem} fontSize="20px">
          Teamwork - All projects in both my current and past positions, and in
          my freelance work have necessitated working heavily in teams to
          deliver the best outcomes for clients.
        </Text>

        <Text className={css.softSkillItem} fontSize="20px">
          Dealing directly with customers to come up with estimates of work and
          scope. Responsibility to analyse what development work is feasible in
          specific timeframes, and to stick to those estimates.
        </Text>
      </div>
    </div>
  </main>
);

export default Home;
