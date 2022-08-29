import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Message } from '../../../../src/components';
import { Switcher } from '../../../../src/theme';

export default {
  title: 'Components/Switcher',
  component: Switcher,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout

    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Message> = (args) => (
  <>
    <Message {...args} />
    <div
      style={{
        position: 'fixed',
        top: '20px',
        transform: 'scale(0.7)',
      }}
    >
      <Switcher />
    </div>
  </>
);

export const MessageDialog = Template.bind({});
MessageDialog.args = {
  title: 'Switcher Component',
  logoSrc: 'https://cdn-icons-png.flaticon.com/512/5262/5262027.png',
  description:
    'This is a Switcher Component. Try to click on the switcher to toggle theme!',
  subdescription: 'This is a demo UI library created with love by Amin Benz 💖',
  button: <Button>Click Me!</Button>,
};
