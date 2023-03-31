import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Item } from '../../../src/components';

export default {
  title: 'DataDisplay/Item',
  component: Item,
  parameters: {
    // layout: 'fullscreen',
    // layout: 'centered',
  },
  argTypes: {},
} as ComponentMeta<typeof Item>;

const Template: ComponentStory<typeof Item> = (args) => <Item {...args}></Item>;

export const Default = Template.bind({});
Default.args = {
  title: 'STAY (With Justin Bieber)',
  subtitle: 'The Kid LAROI',
  image: 'https://i.scdn.co/image/ab67616d0000b27341e31d6ea1d493dd77933ee5',
  date: '2:12',
  right: true,
  imageRadius: 'sm',
};

export const WithoutSubtitle = Template.bind({});
WithoutSubtitle.args = {
  title: 'Ariana Grande',
  image: 'https://i.scdn.co/image/ab6761610000e5ebcdce7620dc940db079bf4952',
  right: false,
  width: '400px',
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
};

export const CustomFont = Template.bind({});
CustomFont.args = {
  font: 'poppins',
  fontSize: 15,
  subtitle: 'Malabalish',
  title: 'AVEYRO AVE',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiyX0mTIbux_rvQHc7SvaTwFMqWi4RpDMSw&usqp=CAU',
  text: 'white',
  width: 300,
};

export const Loading = Template.bind({});
Loading.args = {
  subtitle: 'Malabalish',
  title: 'AVEYRO AVE',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiyX0mTIbux_rvQHc7SvaTwFMqWi4RpDMSw&usqp=CAU',
  width: 300,
  loading: true,
};

export const Active = Template.bind({});
Active.args = {
  subtitle: 'Malabalish',
  title: 'AVEYRO AVE',
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgiyX0mTIbux_rvQHc7SvaTwFMqWi4RpDMSw&usqp=CAU',
  width: 250,
  active: true,
};
