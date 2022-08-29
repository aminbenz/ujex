import { ComponentMeta, ComponentStory } from '@storybook/react';
import { UserHeader } from '../../../../src/components';

export default {
  title: 'Components/UserHeader',
  component: UserHeader,
} as ComponentMeta<typeof UserHeader>;

const Template: ComponentStory<typeof UserHeader> = (args) => (
  <UserHeader {...args} />
);

export const User = Template.bind({});
User.args = {
  display_name: 'Amin Benz',
  avatar: 'https://i.scdn.co/image/ab6775700000ee85a9b0466186cebc2bd8a83827',
  type: 'User',
};
