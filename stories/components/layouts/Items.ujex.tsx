import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Items } from '../../../src/components';

export default {
  title: 'Layout/Items',
  component: Items,

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
} as ComponentMeta<typeof Items>;

const Template: ComponentStory<typeof Items> = (args) => <Items {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      id: '1',
      title: 'Calm Vibes',
      image: 'https://i.scdn.co/image/ab67706f00000003ec69f78942a99131ab104df5',
      description: 'Slow down with some calming keys.',
    },
    {
      id: '2',
      title: 'Sleep',
      image: 'https://i.scdn.co/image/ab67706f00000003b70e0223f544b1faa2e95ed0',
      description: 'Gentle ambient piano to help you fall asleep.',
    },
    {
      id: '3',
      title: 'Soft Pop Hits',
      image: 'https://i.scdn.co/image/ab67706f00000003c4e0a29097d2f0f52baf8b68',
      description:
        'Listen to easy songs from your favorite artists! Cover: Lady Gaga',
    },
    {
      id: '4',
      title: 'Rain Sounds',
      image: 'https://i.scdn.co/image/ab67706f00000003aba1f07094bd3e98cd0122de',
      description: 'Steady rain without any thunder.',
    },
    {
      id: '5',
      title: 'Night Rain',
      image: 'https://i.scdn.co/image/ab67706f0000000393fe06c436d719d3f31107d0',
      description: 'Pouring rain and occasional rolling thunder.',
    },
    {
      id: '6',
      title: 'Late Night Jazz',
      image: 'https://i.scdn.co/image/ab67706f00000003987367cd09caff68b5fa34ec',
      description:
        'The perfect backdrop to an evening spent relaxing in solitude.',
    },
    {
      id: '7',
      title: 'ASMR Sleep',
      image: 'https://i.scdn.co/image/ab67706f0000000328bb958d28682eacbdf45389',
      description: 'Relax and fall asleep to ASMR trigger sounds (no talking).',
    },
    {
      id: '8',
      title: 'Relax & Unwind',
      image: 'https://i.scdn.co/image/ab67706f0000000351548f92c40cd454d0e16fd7',
      description: 'Let your worries and cares slip away.',
    },
    {
      id: '9',
      title: 'Musical Therapy',
      image: 'https://i.scdn.co/image/ab67706f0000000324b0ae50044cb70f005c2ec2',
      description: 'Soothe your mind with gentle instrumentals.',
    },
    {
      id: '10',
      title: 'Bedroom Pop',
      image: 'https://i.scdn.co/image/ab67706f00000003cc90c534f1701405d5f48456',
      description: 'Dreamy jams from the best bedroom producers. Cover: SALES',
    },
    {
      id: '11',
      title: 'Peaceful Guitar',
      image: 'https://i.scdn.co/image/ab67706f000000038ed1a5002b96c2ea882541b2',
      description: 'Unwind to these calm classical guitar pieces.',
    },
  ],
};

export const Custom = Template.bind({});
Custom.args = {
  list: [
    {
      id: '37i9dQZF1DX1s9knjP51Oa',
      title: 'Calm Vibes',
      image: 'https://i.scdn.co/image/ab67706f00000003ec69f78942a99131ab104df5',
      description: 'Slow down with some calming keys.',
    },
    {
      id: '37i9dQZF1DWZd79rJ6a7lp',
      title: 'Sleep',
      image: 'https://i.scdn.co/image/ab67706f00000003b70e0223f544b1faa2e95ed0',
      description: 'Gentle ambient piano to help you fall asleep.',
    },
    {
      id: '37i9dQZF1DWTwnEm1IYyoj',
      title: 'Soft Pop Hits',
      image: 'https://i.scdn.co/image/ab67706f00000003c4e0a29097d2f0f52baf8b68',
      description:
        'Listen to easy songs from your favorite artists! Cover: Lady Gaga',
    },
    {
      id: '37i9dQZF1DX8ymr6UES7vc',
      title: 'Rain Sounds',
      image: 'https://i.scdn.co/image/ab67706f00000003aba1f07094bd3e98cd0122de',
      description: 'Steady rain without any thunder.',
    },
    {
      id: '37i9dQZF1DXbcPC6Vvqudd',
      title: 'Night Rain',
      image: 'https://i.scdn.co/image/ab67706f0000000393fe06c436d719d3f31107d0',
      description: 'Pouring rain and occasional rolling thunder.',
    },
    {
      id: '37i9dQZF1DX4wta20PHgwo',
      title: 'Late Night Jazz',
      image: 'https://i.scdn.co/image/ab67706f00000003987367cd09caff68b5fa34ec',
      description:
        'The perfect backdrop to an evening spent relaxing in solitude.',
    },
    {
      id: '37i9dQZF1DWUAeTOoyNaqm',
      title: 'ASMR Sleep',
      image: 'https://i.scdn.co/image/ab67706f0000000328bb958d28682eacbdf45389',
      description: 'Relax and fall asleep to ASMR trigger sounds (no talking).',
    },
    {
      id: '37i9dQZF1DWU0ScTcjJBdj',
      title: 'Relax & Unwind',
      image: 'https://i.scdn.co/image/ab67706f0000000351548f92c40cd454d0e16fd7',
      description: 'Let your worries and cares slip away.',
    },
    {
      id: '37i9dQZF1DXcCnTAt8CfNe',
      title: 'Musical Therapy',
      image: 'https://i.scdn.co/image/ab67706f0000000324b0ae50044cb70f005c2ec2',
      description: 'Soothe your mind with gentle instrumentals.',
    },
    {
      id: '37i9dQZF1DXcxvFzl58uP7',
      title: 'Bedroom Pop',
      image: 'https://i.scdn.co/image/ab67706f00000003cc90c534f1701405d5f48456',
      description: 'Dreamy jams from the best bedroom producers. Cover: SALES',
    },
    {
      id: '37i9dQZF1DX0jgyAiPl8Af',
      title: 'Peaceful Guitar',
      image: 'https://i.scdn.co/image/ab67706f000000038ed1a5002b96c2ea882541b2',
      description: 'Unwind to these calm classical guitar pieces.',
    },
  ],
  // bg: '#9C9EFE',
  // cardBg: '#A66CFF',
  // text: '#B1E1FF',
};
