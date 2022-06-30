import { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import WebFont from 'webfontloader';
import Commands from './components/Commands';
import ExperiencesList from './components/ExperiencesList';
import { getThemeValue as $ } from './libs/theme';
import ThemeProvider from './libs/theme/ThemeProvider';
import theme from './theme';

WebFont.load({
  google: {
    families: ['JetBrains Mono:300,400,600', 'sans-serif'],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Commands />
      <Content>
        <Header>
          <Brief>
            <Name>
              <div>ANDREW NGUYEN</div>
            </Name>
            <Title>SOFTWARE ENGINEER</Title>
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
          </Contact>
        </Header>
        <span style={{ top: -20, position: 'relative', fontSize: '75%', opacity: 0.5 }}>Have learned something new everyday since 1995</span>

        <Section>
          <SectionTitle>EXPERIENCES</SectionTitle>
          <SectionContent>
            <ExperiencesList
              items={[
                {
                  id: '5',
                  name: 'ZaloPay',
                  time: '2021 - now',
                  content: (
                    <Fragment>
                      <p><b className="title">Senior React Native Engineer</b></p>
                      <li>Lead the front end group of the Finance Services team.</li>
                      <li>We thrived although got locked with an old version of the framework.</li>
                      <p style={{ fontSize: '85%', opacity: 0.5 }}><span>Prefer strong company culture over processes, and promote "less is more" spirit.</span></p>
                    </Fragment>
                  ),
                },
                {
                  id: '4',
                  name: 'Infina',
                  time: '2020 - 2021',
                  content: (
                    <Fragment>
                      <p><b className="title">Senior React Native Developer</b></p>
                      <li>Build the Infina mobile app.</li>
                      <li>Develop a strong team of <b>React Native</b> developers.</li>
                      <li>Maintain team processes to efficiently work under pressure.</li>
                      <p style={{ fontSize: '85%', opacity: 0.5 }}><span>Chaos is better managed than being taken as an excuse.</span></p>
                    </Fragment>
                  ),
                },
                {
                  id: '3',
                  name: 'Minito',
                  time: '2018 - 2020',
                  content: (
                    <Fragment>
                      <p><b className="title">Senior React Developer</b></p>
                      <li>Participate in the conceptual design of the Minito system.</li>
                      <li>Develop the web app with <b>React</b>.</li>
                      <li>Consulted the client on applying <b>Agile methodologies</b>.</li>
                      <p style={{ fontSize: '85%', opacity: 0.5 }}><span>We will always know if something can be done or not.</span></p>
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
                      RealStake
                    </PlainLink>
                  ),
                  time: '2018 - 2020',
                  content: (
                    <Fragment>
                      <p><b className="title">React Developer</b></p>
                      <li>Maintained the web app of RealStake using <b>React</b>.</li>
                      <li>Worked with the product team to assess technical feasibility.</li>
                      <li>Consulted on applying <b>Extreme Programming</b> to the client&apos;s team in order to deliver within tight deadline while still keep the developers happy.</li>
                      <p style={{ fontSize: '85%', opacity: 0.5 }}><span>A friendly and professional working environment has huge benefit on both personal and business development.</span></p>
                    </Fragment>
                  ),
                },
                {
                  id: '1',
                  name: 'Swememo',
                  time: '2016 - 2018',
                  content: (
                    <Fragment>
                      <p><b className="title">Full Stack Developer</b></p>
                      <li>Lead the development of Swememo&apos;s web application.</li>
                      <li>Built and maintained a <b>Ruby on Rails</b> team.</li>
                      <li>Learned various skills related to a product&apos;s lifecycle.</li>
                      <p style={{ fontSize: '85%', opacity: 0.5 }}><span>Together we brought Swememo to Echelon Asia Summit 2018 in Singapore.</span></p>
                      <br />
                    </Fragment>
                  ),
                },
                {
                  id: '0',
                  name: 'East Agile',
                  time: '2016',
                  content: (
                    <Fragment>
                      <p><b className="title">Full Stack Developer</b></p>
                      <li>Developed a client projects under supervision of one of EA&apos;s project managers.</li>
                      <li>Learned <b>TDD</b>, <b>BDD</b>, <b>Extreme Programming</b> and started my career with <b>Ruby on Rails</b>.</li>
                      <p style={{ fontSize: '85%', opacity: 0.5 }}><span>Testing is a must, or we actually don't care at all about our product.</span></p>
                    </Fragment>
                  ),
                },
              ]}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>EDUCATION, TRAINING &amp; AWARD</SectionTitle>
          <SectionContent>
            <ExperiencesList
              hasContent={false}
              items={[
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
      </Content>
    </ThemeProvider>
  );
}

export default App;

//#region
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

  b {
    font-weight: 700;
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
//#endregion
