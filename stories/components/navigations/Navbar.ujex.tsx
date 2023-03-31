import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Navbar, Navbar2 } from '../../../src/components';

export default {
  title: 'Navigations/Navbar',
  component: Navbar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },

  argTypes: {
    bg: {
      control: {
        type: 'color',
        presetColors: [
          { color: 'white', title: 'White' },
          { color: '#f6f9fc', title: 'White blue' },
          { color: '#181a1d', title: 'Black (default)' },
          { color: '#0c0c0c', title: 'Black2' },
          { color: '#031122', title: 'Blue' },
        ],
      },
    },
    text: {
      control: {
        type: 'color',
        presetColors: ['#181a1d', '#f6f9fc'],
      },
    },
    height: { control: { type: 'number', min: 40, max: 100, step: 20 } },
    loading: { active: { control: 'boolean' } },
  },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;
const Template2: ComponentStory<typeof Navbar2> = (args) => (
  <Navbar2 {...args} />
);

export const Login = Template.bind({});
Login.args = {
  list: [
    { title: 'games' },
    { title: 'Owner', name: '' },
    { title: 'services' },
    { title: 'About' },
  ],
};

export const Logout = Template.bind({});
Logout.args = {
  user: {
    name: 'Amin Benz',
  },
  list: [
    { title: 'games' },
    { title: 'owner', name: '' },
    { title: 'services' },
  ],
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  user: {
    name: 'Amin Benz',
  },
  list: [{ title: 'games' }, { title: 'services' }, { title: 'About' }],
  bg: 'white',
  text: 'black',
};

export const Custom = Template.bind({});
Custom.args = {
  button: {
    bg: '#db0000',
  },
  brand:
    'https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png',
  list: [
    { title: 'tv shows' },
    { title: 'movies', name: '' },
    { title: 'recently add' },
    { title: 'my list' },
  ],
  bg: 'black',
};

export const NavbarTwoLogin = Template2.bind({});
NavbarTwoLogin.args = {
  name: 'Amin Benz',
  avatar:
    'https://resize.elle.fr/article/var/plain_site/storage/images/loisirs/cinema/news/avatar-2-une-premiere-bande-annonce-en-mai-4010741/96462268-1-fre-FR/Avatar-2-une-premiere-bande-annonce-en-mai.jpg',
  isAuthenticated: true,
};

export const NavbarTwoRegister = Template2.bind({});
NavbarTwoRegister.args = {
  isAuthenticated: false,
};
