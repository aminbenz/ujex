import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../../../src/components';

export default {
  title: 'Components/Text',
  component: Text,
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
        type: 'number',
        min: 10,
        max: 100,
        step: 1,
      },
    },
    href: {
      description: 'Href link',
    },
    target: {
      description: '_blank | _self',
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args}></Text>;

export const Default = Template.bind({});
Default.args = {
  as: 'h2',
  children: 'This is a text! ',
  // title : "Text",
  // list : [],
  // text : [],
  // bg : [],
};
