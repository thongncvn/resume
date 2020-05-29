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
            <Title>WEB DEVELOPER</Title>
          </Brief>
          <Contact>
            <div>+84 988 195 159</div>
            <div>thong.nguyencao.vn@gmail.com</div>
            <div>www.thongncvn.com</div>
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
                      <div>
                        Joined design and development of a system to manage
                        proprietary documents of mining enterprises, which
                        allowed users to upload directories with more than
                        10,000 files simultaneously.
                      </div>
                    </Fragment>
                  ),
                },
                {
                  id: '2',
                  name: 'RealStake (East Agile)',
                  time: '2018 - 2020',
                  content: (
                    <Fragment>
                      <strong>React Developer</strong>
                      <div>
                        Responsibilities included building the front-end part of
                        RealStake app with <strong>React</strong> and consulting
                        on applying <strong>Extreme Programming</strong> to the
                        client's team.
                      </div>
                    </Fragment>
                  ),
                },
                {
                  id: '1',
                  name: 'Swememo',
                  time: '2016 - 2018',
                  content: (
                    <Fragment>
                      <strong>Ruby on Rails Developer</strong>
                      <div>
                        <strong>Swememo</strong> is an online platform to
                        connect photographers and their potential clients.
                      </div>
                      <div>
                        I help building and maintaining Swememo's web
                        application.
                      </div>
                      <div>
                        <i>
                          <div>
                            Learned various skills related to a product's
                            lifecycle. Together we brought the product to{' '}
                            <strong>Echelon Asia Summit</strong> in Singapore.
                          </div>
                        </i>
                      </div>
                    </Fragment>
                  ),
                },
                {
                  id: '0',
                  name: 'East Agile',
                  time: '2016',
                  content: (
                    <Fragment>
                      <strong>Ruby on Rails Developer</strong>
                      <div>
                        Joined the development of client projects under
                        supervision of one of EA's project managers.
                      </div>
                      <div>
                        <i>
                          Learned to apply <strong>TDD</strong>,{' '}
                          <strong>BDD</strong>,{' '}
                          <strong>Extreme Programming</strong> and started{' '}
                          <strong>Web Development</strong>.
                        </i>
                      </div>
                    </Fragment>
                  ),
                },
              ]}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>EDUCATION & AWARD</SectionTitle>
          <SectionContent>
            <ExperiencesList
              hasContent={false}
              items={[
                {
                  id: '0',
                  name: 'Vietnam Olympiad in Informatics - Bronze Medal',
                  time: '2013',
                },
                {
                  id: '1',
                  name: 'FPT University',
                  time: '2018',
                },
              ]}
            />
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>EXPERTISE</SectionTitle>
          <ExpertiseContent>
            <div>React</div>
            <div>Ruby on Rails</div>
            <div>Node</div>
            <div>Docker</div>
            <div>AWS</div>
            <div>*nix</div>
          </ExpertiseContent>
        </Section>
      </Content>
    </ThemeProvider>
  );
}

export default App;
