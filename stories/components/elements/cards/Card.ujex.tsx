import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../../../../src/components';

export default {
  title: 'Components/Card',
  component: Card,
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
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}></Card>;

export const Default = Template.bind({});
Default.args = {
  title: 'Jazz Rap',
  description: 'Laid Back Cratedigger Hip-Hop From Aroun',
  image: 'https://i.scdn.co/image/ab67706f000000035115b9702d26cd841fda7827',
  // title : "Card",
  // list : [],
  // text : [],
  // bg : [],
};
