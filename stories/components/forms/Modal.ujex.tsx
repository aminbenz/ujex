import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '../../../src/components';

export default {
  title: 'Overlay/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argType: {
    show: {
      description: 'Show or hide the Modal',
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}></Modal>
);

export const Create = Template.bind({});
Create.args = {
  show: true,
  title: 'Create Playlist',
};

export const Edit = Template.bind({});
Edit.args = {
  show: true,
  type: 'edit',
  name: 'my playlist name',
  description: 'my playlist description',
  public: false,
  image: 'https://i.scdn.co/image/ab67706f00000003ec69f78942a99131ab104df5',
};
