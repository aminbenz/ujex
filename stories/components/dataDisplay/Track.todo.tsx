import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Track } from '../../../src/components';

export default {
  title: 'Components/Track',
  component: Track,
  parameters: {
    // layout: 'fullscreen',
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
} as ComponentMeta<typeof Track>;

const Template: ComponentStory<typeof Track> = (args) => (
  <Track {...args}></Track>
);

export const Default = Template.bind({});
Default.args = {
  data: {
    id: '1',
    title: 'Travis X BEVZ',
    uri: 'audio',
    name: 'Travis',
    album_name: 'Utopia',
    avatar: 'url',
    duration_ms: '3:31',
    added_at: '21:1',
  },
  // text : [],
  // bg : [],
};
