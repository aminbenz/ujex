import { ComponentMeta, ComponentStory } from '@storybook/react';
import { List } from '../../../../src/components';

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    // layout: 'fullscreen',
    // layout: 'centered',
  },
  argTypes: {
    // fontSize: {
    //   control: {
    //     type: 'range',
    //     min: 16,
    //     max: 30,
    //     step: 1,
    //   },
    // },
  },
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args}></List>;

export const Default = Template.bind({});
Default.args = {
  data: ['title', 'artist', 'album', '1', '2'],
  // title : "Card",
  // list : [],
  // text : [],
  // bg : [],
};
