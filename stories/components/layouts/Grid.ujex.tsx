import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Box, Grid } from '../../../src/components';

export default {
  title: 'Layout/Grid',
  component: Grid,

  argTypes: {
    gap: { control: { type: 'range', min: 0, max: 50, step: 5 } },
    text: {
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
    cardBg: {
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
    bg: {
      control: {
        type: 'color',
        presetColors: ['white', '#F5F5F5', '#181a1d', '#212428'],
      },
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#787A91"
    />

    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#557C55"
    />

    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#152D35"
    />
    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#152D35"
    />
    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#152D35"
    />
    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#152D35"
    />
    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#152D35"
    />
    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#152D35"
    />
    <Box
      data={{
        avatar:
          'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
        title: 'AVEYRO AVE',
        id: '1UrK7ewyXaEI2kfXBd0FBf',
        description: 'Ma3labalich',
        uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      }}
      bg="#152D35"
    />
  </Grid>
);

export const Default = Template.bind({});
Default.args = {};
