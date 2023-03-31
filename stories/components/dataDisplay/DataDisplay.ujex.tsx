import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Rectangle } from '../../../src';

export default {
  title: 'DataDisplay/box',
  component: Rectangle,
  argTypes: {},
} as ComponentMeta<typeof Rectangle>;

const Template: ComponentStory<typeof Rectangle> = (args) => (
  <Rectangle {...args} />
);

export const Index = Template.bind({});
Index.args = {
  width: 300,
  uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
  description: 'Ma3labalich',
  title: 'AVEYRO AVE',
  avatar: 'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
};
