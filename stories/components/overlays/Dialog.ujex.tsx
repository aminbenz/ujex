import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dialog } from '../../../src/components';

export default {
  title: 'Overlay/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  argType: {
    show: {
      description: 'Show or hide the alert',
    },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => (
  <>
    <Dialog {...args}></Dialog>
  </>
);

export const Warning = Template.bind({});
Warning.args = {
  show: true,
  title: 'Warning',
  description:
    'are you sure you want to delete this playlist! are you sure you want to delete this playlist!',
};

export const File = Template.bind({});
File.args = {
  show: true,
  type: 'file',
  title: 'Add file',
};
