import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Sidebar } from '../../../src/components';

export default {
  title: 'Navigations/Sidebar',
  component: Sidebar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    bg: {
      control: {
        type: 'color',
        presetColors: [
          { color: '#181a1d', title: 'Black' },
          { color: '#0c0c0c', title: 'Black2' },
          { color: '#031122', title: 'Blue' },
          { color: '#f6f9fc', title: 'White' },
        ],
      },
    },
    text: {
      control: {
        type: 'color',
        presetColors: ['#181a1d', '#f6f9fc'],
      },
    },
    loading: { active: { control: 'boolean' } },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  playlists: [
    { id: '1', title: "I See 'Colors' 💫", name: '' },
    { id: '2', title: 'Ye-Me 🌪', name: '' },
    { id: '3', title: 'Lalalalalalalalala 🪐', name: '' },
    { id: '4', title: 'Teardrop ☄️ ✨ 🔥', name: '' },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
