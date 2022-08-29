import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, Message } from '../../../src/components';

export default {
  title: 'Parts/Message',
  component: Message,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    gap: { control: { type: 'range', min: 0, max: 50, step: 5 } },
    text: {
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
    bg: {
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
  },
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const MessageDialog = Template.bind({});
MessageDialog.args = {
  title: 'Ujex X Mouzikty',
  logoSrc: './brand/logo.png',
  //   logoSrc: './logo.svg',
  description:
    'This is a Message Component. Try to click on the switcher to toggle theme!',
  subdescription: 'This Is A Demo UI library Created With Love By Amin Benz 💖',
  button: <Button color="purple">Click Me!</Button>,
};

// export const MessageLightTheme = Template.bind({});
// MessageLightTheme.args = {
//   title: 'Login Page',
//   logoSrc: './logo.svg',
//   text: 'black',
//   bg: 'white',
//   //   logoSrc: './logo.svg',
//   description: 'Login with Ujex to Get Started with Mouzikty',
//   button: <Button>Login</Button>,
// };
