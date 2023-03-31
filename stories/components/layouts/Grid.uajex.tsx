import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Grid } from '../../../src';

export default {
  title: 'Layout/Test',
  component: Grid,

  argTypes: {
    gap: { control: { type: 'range', min: 0, max: 50, step: 5 } },
    text: {
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};
