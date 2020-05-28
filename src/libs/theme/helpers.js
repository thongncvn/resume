import get from 'lodash/get';

export const createTheme = (config) => {
  const {COMMON, meta = {}, ...others} = config;

  if (others.length === 0) {
    throw new Error('At least one theme must be specified.');
  }

  return {
    getVersion: (name) => {
      if (others[name]) {
        return {...COMMON, ...others[name]};
      }
      throw new Error(`Unknown theme "${name}"`);
    },
    getDefaultThemeName: () => {
      return meta.default || Object.keys(others)[0];
    },
  };
};

export const getThemeValue = (key) => ({theme}) => {
  const value = get(theme, key);
  if (value) {
    return value;
  }
  throw new Error(`Unknown theme key "${key}"`);
};
