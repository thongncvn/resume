import React, {useContext} from 'react';
import styled from 'styled-components';
import {getThemeValue as $, ThemeContext} from '../libs/theme';
import {FiMoon, FiSun} from 'react-icons/fi';
import {noPrint} from '../utils/css';

const Root = styled.div`
  ${noPrint}
  border-bottom: 1px solid ${$('panelBorderColor')};
  padding: 8px 40px;
  background-color: ${$('panelColor')};
`;

const ChangeThemeButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const DownloadButton = styled.a`
  margin-left: 8px;
  color: ${({mode}) => (mode === 'light' ? 'black' : 'white')};
`;

const Commands = () => {
  const {mode, setMode} = useContext(ThemeContext);

  const onChangeTheme = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <Root>
      <ChangeThemeButton onClick={onChangeTheme}>
        {mode === 'light' ? <FiSun /> : <FiMoon />}
      </ChangeThemeButton>
      <DownloadButton
        mode={mode}
        href="/Resume.light.pdf"
        rel="noopenner noreferrer"
        target="_blank"
      >
        Download as PDF
      </DownloadButton>
    </Root>
  );
};

export default Commands;
