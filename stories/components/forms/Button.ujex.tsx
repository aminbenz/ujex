import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BiRocket } from 'react-icons/bi';
import { Button } from '../../../src';

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: {
      defaultValue: 'Primary',
      description: 'React Component Or Text',
    },
    // as: {
    //   description: 'Element Name',
    //   control: {
    //     type: 'text',
    //   },
    // },
    href: {
      description: 'Href link',
    },
    target: {
      description: '_blank | _self',
    },
    leftIcon: {
      description: 'JSX Element',
      control: {
        type: null,
      },
    },
    rightIcon: {
      description: 'JSX Element',
      control: {
        type: null,
      },
    },
    disabled: {
      // description: 'Disabled',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    loading: {
      // description: 'Disabled',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const BasicButton = Template.bind({});
BasicButton.args = {
  children: 'Primary',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  children: 'Secondary',
  color: 'secondary',
};

export const ButtonLink = Template.bind({});
ButtonLink.args = {
  children: 'Link',
  as: 'a',
  href: 'https://aminbenz.vercel.app',
  target: '_blank',
  color: 'tiffany',
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  children: 'Outlined Button',
  color: 'purple',
  variant: 'outlined',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  children: 'Button With Icon',
  bg: '#f5487f',
  rightIcon: <BiRocket />,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  children: 'Disabled',
  disabled: true,
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  children: 'Small',
  size: 'sm',
};

export const BigButton = Template.bind({});
BigButton.args = {
  children: 'Big Button',
  size: 'lg',
  style: { backgroundColor: '#C8E9A0', color: '#2c2c2c' },
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  children: 'Danger',
  color: 'danger',
  radius: 'xs',
};
