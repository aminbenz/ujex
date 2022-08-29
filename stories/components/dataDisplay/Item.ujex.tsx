import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Item } from '../../../src/components';

export default {
  title: 'DataDisplay/Item',
  component: Item,
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
  },
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args}></Item>;

export const Default = Template.bind({});
Default.args = {
  title: 'STAY (With Justin Bieber)',
  subtitle: 'The Kid LAROI',
  image: 'https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5',
  date: '2:12',
  right: true,
};

export const Type2 = Template.bind({});
Type2.args = {
  title: 'Ariana Grande',
  image: 'https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952',
  right: false,
  width: '400px',
  imageRadius: 'full',
};

export const Custom = Template.bind({});
Custom.args = {
  title: 'Just The Way You Are',
  image: 'https://i.scdn.co/image/ab67616d0000b273f60070dce96a2c1b70cf6ff0',
  right: false,
  text: '#ade7da',
  bg: '#186455',
  radius: 'xs',
  width: '400px',
  imageRadius: 'full',
};
