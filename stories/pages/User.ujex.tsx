import { ComponentMeta, ComponentStory } from '@storybook/react';
import User from '../../src/components/templates/User';

export default {
  title: 'Pages/User',
  component: User,
  parameters: {
    layout: 'fullscreen',
    // layout: 'centered',
  },
  argTypes: {
    // text: {
    //   // defaultValue: 'white',
    //   description: 'Text Color',
    //   control: {
    //     type: 'color',
    //     presetColors: ['#F5F5F5', '#181a1d', '#212428'],
    //   },
    // },
    // bg: {
    //   // defaultValue: 'primary',
    //   description: 'Background Color',
    //   control: {
    //     type: 'color',
    //     presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
    //   },
    // },
    // fontSize: {
    //   control: {
    //     type: 'range',
    //     min: 16,
    //     max: 30,
    //     step: 1,
    //   },
    // },
    // href: {
    //   description: 'Href link',
    // },
    // target: {
    //   description: '_blank | _self',
    // },
    // leftIcon: {
    //   description: 'JSX Element',
    //   control: {
    //     type: null,
    //   },
    // },
    // rightIcon: {
    //   description: 'JSX Element',
    //   control: {
    //     type: null,
    //   },
    // },
  },
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = (args) => <User></User>;

export const Default = Template.bind({});
Default.args = {
  // title : "User",
  // list : [],
  // text : [],
  // bg : [],
};
