import {createTheme} from './libs/theme/helpers';

export default createTheme({
  light: {
    pageBackgroundColor: 'white',
    textColor: '#383838',
    borderColor: '#383838',
    panelBorderColor: 'gray',
    lighterBorderColor: 'gray',
    panelColor: 'gray',
  },
  dark: {
    pageBackgroundColor: '#171717',
    textColor: '#dcdcdc',
    borderColor: '#dcdcdc',
    panelBorderColor: '#5a5a5a',
    lighterBorderColor: '#717171',
    panelColor: '#353535',
  },
  COMMON: {
    fontSizes: {
      small: '13px',
      regular: '16px',
      header: '22px',
      title: '40px',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      bold: 600,
    },
    fontFamily: "'Source Sans Pro', sans-serif",
  },
  meta: {
    default: 'light',
  },
});
