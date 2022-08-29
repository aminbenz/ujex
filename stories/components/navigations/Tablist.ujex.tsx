import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Tablist } from '../../../src';

export default {
  title: 'Navigations/Tablist',
  component: Tablist,
  parameters: {
    // fullscreen: true,
    // layout: 'centered',
  },
  argTypes: {
    text: {
      // defaultValue: 'white',
      description: 'Text Color',
      control: {
        type: 'color',
        presetColors: ['#F5F5F5', '#181a1d', '#212428'],
      },
    },
    bg: {
      // defaultValue: 'primary',
      description: 'Background Color',
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
    fontSize: {
      control: {
        type: 'range',
        min: 16,
        max: 30,
        step: 1,
      },
    },
    href: {
      description: 'Href link',
    },
    target: {
      description: '_blank | _self',
    },
    leftIcon: {
      description: 'JSX Element',
      control: {
        type: null,
      },
    },
    rightIcon: {
      description: 'JSX Element',
      control: {
        type: null,
      },
    },
  },
} as ComponentMeta<typeof Tablist>;

const Template: ComponentStory<typeof Tablist> = (args) => (
  <Tablist {...args}></Tablist>
);

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      title: 'overview',
      href: '/overview',
      target: '_blank',
    },
    {
      title: 'recent listening',
      href: '/recent listening',
      target: '_self',
    },
    {
      title: 'playlists',
      href: '/playlists',
    },
    {
      title: 'followers',
      href: '/followers',
      target: '_self',
    },
    {
      title: 'followings',
      href: '/followings',
      target: '_self',
    },
  ],
};
