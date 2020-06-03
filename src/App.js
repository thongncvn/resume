import React, {Fragment} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import ExperiencesList from './components/ExperiencesList';
import {getThemeValue as $} from './libs/theme';
import ThemeProvider from './libs/theme/ThemeProvider';
import theme from './theme';
import Commands from './components/Commands';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Source Sans Pro:300,400,600', 'sans-serif'],
  },
});

const PlainLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: ${$('pageBackgroundColor')};
    color: ${$('textColor')};
    font-family: ${$('fontFamily')};
    font-size: ${$('fontSizes.regular')};
    font-weight: ${$('fontWeights.light')};
    letter-spacing: 0.5px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
  border-bottom: 1px solid ${$('borderColor')};
`;

const Brief = styled.div``;

const Name = styled.div`
  font-size: ${$('fontSizes.title')};
  font-weight: ${$('fontWeights.bold')};
  letter-spacing: 5px;
`;

const Title = styled.div`
  letter-spacing: 2px;
`;

const Contact = styled.div`
  text-align: right;
  font-size: ${$('fontSizes.small')};
`;

const Section = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
`;

const SectionTitle = styled.div`
  font-size: ${$('fontSizes.header')};
  font-weight: ${$('fontWeights.bold')};
  letter-spacing: 2px;
  margin-bottom: 24px;
`;

const Content = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    max-width: 100vw;
  }

  ${Section} + ${Section} {
    border-top: 1px solid ${$('lighterBorderColor')};
  }
`;

const SectionContent = styled.div``;

const ExpertiseContent = styled(SectionContent)`
  display: flex;
  justify-content: space-between;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Commands />
      <Content>
        <Header>
          <Brief>
            <Name>
              <div>THỐNG</div>
              <div>NGUYỄN CAO</div>
            </Name>
            <Title>DEVELOPER</Title>
          </Brief>
          <Contact>
            <div>
              <PlainLink href="tel:84988195159">+84 988 195 159</PlainLink>
            </div>
            <div>
              <PlainLink href="mailto:thong.nguyencao.vn@gmail.com">
                thong.nguyencao.vn@gmail.com
              </PlainLink>
            </div>
            <div>
              <PlainLink href="https://www.thongncvn.com">
                www.thongncvn.com
              </PlainLink>
            </div>
          </Contact>
        </Header>

        <Section>
          <SectionTitle>WORK EXPERIENCES</SectionTitle>
          <SectionContent>
            <ExperiencesList
              items={[
                {
                  id: '3',
                  name: 'Minito (East Agile)',
                  time: '2018 - 2020',
                  content: (
                    <Fragment>
                      <strong>React Developer</strong>
                      <p>
                        - Joined design and development of a system to manage
                        proprietary documents of mining enterprises, which
                        allowed users to upload directories with more than
                        10,000 files simultaneously.
                      </p>
                      <p>
                        - Took the consultant role to help the client gets used
                        to working with an Agile team in an efficient manner.
                      </p>
                    </Fragment>
                  ),
                },
                {
                  id: '2',
                  name: (
                    <PlainLink
                      href="https://realstake.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RealStake (East Agile)
                    </PlainLink>
                  ),
                  time: '2018 - 2020',
                  content: (
                    <Fragment>
                      <strong>React Developer</strong>
                      <p>
                        - Maintain the front-end part of RealStake app using
                        React.
                      </p>
                      <p>
                        - Closely worked with the designer team to assess
                        technical feasibility.
                      </p>
                      <p>
                        - Consulted on applying Extreme Programming to the
                        client&apos;s team in order to deliver within tight
                        deadline while stil keep the developers happy.
                      </p>
                    </Fragment>
                  ),
                },
                {
                  id: '1',
                  name: 'Swememo',
                  time: '2016 - 2018',
                  content: (
                    <Fragment>
                      <strong>Full Stack Developer</strong>
                      <p>
                        - Swememo is an online platform to connect photographers
                        and their potential clients.
                      </p>
                      <p>
                        - Lead the development and maintain Swememo&apos;s web
                        application.
                      </p>
                      <p>
                        - Took the trainer role to help new team members
                        collaborate on the project with Ruby on Rails.
                      </p>
                      <p>
                        <div>
                          - Learned various skills related to a product&apos;s
                          lifecycle. Together we brought the product to Echelon
                          Asia Summit in Singapore.
                        </div>
                      </p>
                    </Fragment>
                  ),
                },
                {
                  id: '0',
                  name: 'East Agile',
                  time: '2016',
                  content: (
                    <Fragment>
                      <strong>Full Stack Developer</strong>
                      <p>
                        - Joined development of client projects under
                        supervision of one of EA&apos;s project managers.
                      </p>
                      <p>
                        - Learned to apply TDD, BDD, Extreme Programming and
                        started Web Development.
                      </p>
                    </Fragment>
                  ),
                },
              ]}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>EDUCATION, TRAINING & AWARD</SectionTitle>
          <SectionContent>
            <ExperiencesList
              hasContent={false}
              items={[
                {
                  id: '2',
                  name: (
                    <PlainLink
                      href="https://developers.google.com/machine-learning/crash-course"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Machine Learning Crash Course
                    </PlainLink>
                  ),
                  time: '2020',
                },
                {
                  id: '1',
                  name: (
                    <PlainLink
                      href="https://hcmuni.fpt.edu.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FPT University
                    </PlainLink>
                  ),
                  time: '2018',
                },
                {
                  id: '3',
                  name: (
                    <PlainLink
                      href="https://daihoc.fpt.edu.vn/doi-apidez-gianh-giai-nhat-cuoc-thi-lap-trinh-ung-dung-android/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FPT&apos;s Android Application Programming Contest - First
                      Prize
                    </PlainLink>
                  ),
                  time: '2016',
                },
                {
                  id: '0',
                  name: 'Vietnam Olympiad in Informatics - Bronze Medal',
                  time: '2013',
                },
              ]}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>EXPERTISE</SectionTitle>
          <ExpertiseContent>
            <div>
              <strong>Technical</strong>
              <div>React</div>
              <div>Ruby on Rails</div>
              <div>Node</div>
            </div>
            <div>
              <div>&nbsp;</div>
              <div>Docker</div>
              <div>AWS</div>
              <div>*nix</div>
            </div>
            <div>
              <div>&nbsp;</div>
              <div>PostgreSQL</div>
              <div>GraphQL</div>
              <div>MongoDB</div>
            </div>
            <div>
              <div>&nbsp;</div>
              <div>Selenium</div>
              <div>Express</div>
            </div>
            <div>
              <strong>On my way</strong>
              <div>Machine Learning</div>
              <div>Big Data</div>
            </div>
          </ExpertiseContent>
        </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;
