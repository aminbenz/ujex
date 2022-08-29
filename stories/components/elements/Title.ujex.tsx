import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title } from '../../../src/components';

export default {
  title: 'Components/Title',
  component: Title,
  parameters: {},
  argTypes: {
    href: {
      description: 'Href link',
    },
    target: {
      description: '_blank | _self',
    },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}></Title>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Artists',
  options: true,
  // list : [],
  // text : [],
  // bg : [],
};
