import { rest, setupWorker } from 'msw';
import * as NextImage from 'next/image';
import '../styles/index.css';
import theme from './theme';

const BREAKPOINTS_INT = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    console.log(val);
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  docs: {
    theme: theme,
  },
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#1a1a1d',
      },
      {
        name: 'light',
        value: 'white',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
};

if (typeof global.process === 'undefined') {
  const worker = setupWorker(
    rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
      return res(ctx.json({ name: 'John Doh' }));
    })
  );
  worker.start();
}

// All stories expect a theme arg
// The default value of the theme arg to all stories

export const argTypes = {
  theme: {
    control: 'select',
    options: ['light', 'dark'],
    type: { name: 'string', required: false },
    // defaultValue: 'Media',
  },
  bg: {
    // defaultValue: 'Media',
    type: { name: 'string', required: false },
    description: 'Background Color',
    table: {
      // type: {
      //   summary: 'something short',
      //   detail: 'something really really long',
      // },
      defaultValue: { summary: 'dark' },
    },
    control: {
      type: 'color',
      presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
    },
  },
  text: {
    // defaultValue: 'white',
    type: { name: 'string', required: false },
    description: 'text color',
    table: {
      // type: {
      //   summary: 'something short',
      //   detail: 'something really really long',
      // },
      defaultValue: { summary: 'white' },
    },
    control: {
      type: 'color',
      presetColors: ['#F5F5F5', '#181a1d', '#212428'],
    },
  },
  fontSize: {
    control: {
      type: 'number',
      min: 5,
      max: 100,
      step: 1,
    },
  },
  fontWeight: {
    type: { name: 'number', required: false },
    // defaultValue: 400,
    control: {
      type: 'number',
      min: 100,
      max: 900,
      step: 100,
    },
    description: 'font Weight',
    control: {
      type: 'number',
      min: 100,
      max: 900,
      step: 100,
    },
  },
  style: {
    type: { required: false },
    description: 'Inline CSS Styles',
    control: {
      type: null,
    },
  },
  height: {
    // defaultValue: 'white',
    // type: { name: 'string', required: false },
    // description: 'text color',
    table: {
      // type: {
      //   summary: 'something short',
      //   detail: 'something really really long',
      // },
      defaultValue: { summary: '40px' },
    },
    control: {
      type: 'text',
    },
  },
  width: {
    // defaultValue: 'white',
    // type: { name: 'string', required: false },
    // description: 'text color',
    table: {
      // type: {
      //   summary: 'something short',
      //   detail: 'something really really long',
      // },
      defaultValue: { summary: 'full width' },
    },
    control: {
      type: 'text',
    },
  },
};
