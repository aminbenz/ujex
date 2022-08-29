import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Alert, Button } from '../../../src/components';

export default {
  title: 'Overlay/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  argType: {
    show: {
      description: 'Show or hide the alert',
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <>
    <Button color="purple">Open Modal !</Button>
    <Alert {...args}></Alert>
  </>
);

export const Warning = Template.bind({});
Warning.args = {
  show: true,
  title: 'Warning',
  description:
    'are you sure you want to delete this playlist! are you sure you want to delete this playlist!',
};
