import { create } from '@storybook/theming';

const THEME = {
  primary: '#39f0c6',
  secondary: '#5b8eff',
  text: '#e1e1eb',
  bg: '#1a1a1d',
  bg200: '#242428',
  bg400: '#272a2e',
  bg600: '#25282c',
  border: '#80808023',
  radius: '10px',
  'radius-sm': '10px',
};

export default create({
  base: THEME.bg200,

  //  Colors
  colorPrimary: THEME.primary,
  colorSecondary: THEME.secondary,

  // (bg & left sidebar)
  appBg: THEME.bg200,

  // rigth sidebar
  appContentBg: THEME.bg200,
  appBorderColor: THEME.border,
  appBorderRadius: THEME.radius,

  // Text colors
  textColor: THEME.text,
  textInverseColor: '#b9b8bd',

  // Toolbar default and active colors
  barTextColor: THEME.text,
  barSelectedColor: THEME.primary,
  barBg: THEME.bg400,

  // Form colors
  inputBg: THEME.bg,
  inputBorder: THEME.border,
  inputTextColor: THEME.text,
  inputBorderRadius: THEME['radius-sm'],

  // Typography
  fontBase:
    'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,  sans-serif',
  fontCode: 'monospace',

  // Brand
  brandTitle: 'Ujex',
  brandUrl: 'https://ujex.io',
  brandImage: '/brand/logo.svg',
  brandTarget: '_self',
});
