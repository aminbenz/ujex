import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box } from '../../../src/components';

export default {
  title: 'DataDisplay/box',
  component: Box,
  argTypes: {
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
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Index = Template.bind({});
Index.args = {
  width: 300,
  data: {
    uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
    description: 'Ma3labalich',
    title: 'AVEYRO AVE',
    avatar: 'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
  },
};
