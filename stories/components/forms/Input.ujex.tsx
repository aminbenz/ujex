import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SearchIcon } from '../../../src/assets/icons';
import { Input } from '../../../src/components';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    cols: { control: { type: 'number', min: 1, max: 30, step: 1 } },
    rows: { control: { type: 'number', min: 1, max: 30, step: 1 } },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args}></Input>
);

export const Text = Template.bind({});
Text.args = {
  label: 'username',
};

export const Textarea = Template.bind({});
Textarea.args = {
  label: 'description',
  type: 'textarea',
  placeholder: 'write some text!',
};

export const Password = Template.bind({});
Password.args = {
  label: 'password',
  type: 'password',
  placeholder: 'enter your passcode',
};

export const File = Template.bind({});
File.args = {
  label: 'file',
  type: 'file',
  placeholder: 'Choose file',
};

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Search...',
  height: 30,
  leftIcon: <SearchIcon />,
  radius: 'md',
};
