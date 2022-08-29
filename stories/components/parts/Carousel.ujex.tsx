import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Carousel, Title } from '../../../src';

export default {
  title: 'Parts/recentlyAdd',
  component: Carousel,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },

  argTypes: {
    col: { control: { type: 'range', min: 1, max: 7, step: 1 } },
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
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <>
    <Title border={false} style={{ margin: '20px 40px' }} options={true}>
      Recently Add
    </Title>
    <Carousel {...args} />
  </>
);

export const RecentlyAdd = Template.bind({});
RecentlyAdd.args = {
  data: [
    {
      uri: 'spotify:track:1UrK7ewyXaEI2kfXBd0FBf',
      description: 'Dam3a | دمعة',
      title: 'AVEYRO AVE',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b273a6d65fc5609db491a15cc214',
    },
    {
      id: '00tb61Up4glc40ZmmFzZw6',
      description: 'Santa Fe',
      title: 'ElGrandeToto',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b27325d1d77936d4fffca8740fe3',
      uri: 'spotify:track:00tb61Up4glc40ZmmFzZw6',
      type: 'track',
      popularity: 46,
      played_at: '2022-07-25T12:08:41.864Z',
    },
    {
      uri: 'spotify:track:4D3CqkmGygt4e6r07LvM5p',
      description: 'Cariño (feat. Mocci)',
      title: 'Leil',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2734c07755405eb7ed6ded3f424',
    },
    {
      uri: 'spotify:track:0WwA3CxSpDmi0mWTiLAvjp',
      description: 'Lfas Lk7l',
      title: 'Aafia',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b273589da57c2051832fc11404d8',
    },
    {
      description: 'BABA',
      title: 'Aezaddy',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b273aea95b9498ebf8cbea1d3b36',
    },
    {
      id: '5FRBGBRj7uF3YkkTPZr6iP',
      played_at: '2022-07-25T12:02:19.722Z',
      uri: 'spotify:track:5FRBGBRj7uF3YkkTPZr6iP',
      type: 'track',
      popularity: 41,
      description: 'Kfaya',
      title: 'kouz1',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2739efa2f3fb08e2ca88b03527e',
    },
    {
      id: '63PtkyU8wyE6RpYXIW5pBD',
      played_at: '2022-07-25T11:58:46.619Z',
      uri: 'spotify:track:63PtkyU8wyE6RpYXIW5pBD',
      type: 'track',
      popularity: 25,
      description: 'PRBLMS',
      title: 'Aafia',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2733e8f6cc479076de9f0ca8d37',
    },
    {
      id: '4DvqktE53W21fqqWzRlsIA',
      played_at: '2022-07-25T11:53:52.272Z',
      uri: 'spotify:track:4DvqktE53W21fqqWzRlsIA',
      type: 'track',
      popularity: 38,
      description: '8PM',
      title: 'Maestro',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b273a0004207cd24d48207159c99',
    },
    {
      id: '1V65sv8vad1ELtfYfIIaRC',
      played_at: '2022-07-25T11:32:35.487Z',
      uri: 'spotify:track:1V65sv8vad1ELtfYfIIaRC',
      type: 'track',
      popularity: 37,
      description: 'Trap Roumi',
      title: 'kouz1',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b27361df2549afcd849db6a5415c',
    },
    {
      id: '5ibbkUba2vth4FosVvaYka',
      played_at: '2022-07-25T11:30:02.188Z',
      uri: 'spotify:track:5ibbkUba2vth4FosVvaYka',
      type: 'track',
      popularity: 35,
      description: 'Awili',
      title: 'Raste',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2734bfa7cf601f15b4cf6f24fa1',
    },
    {
      id: '4KoiLBOLPnSERA0apY9y1I',
      played_at: '2022-07-25T11:26:12.848Z',
      uri: 'spotify:track:4KoiLBOLPnSERA0apY9y1I',
      type: 'track',
      popularity: 46,
      description: 'Panamera',
      title: 'Liamsi',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2734a72d1c3b57828c3981b0856',
    },
    {
      id: '6SiLKnvxXkh3GJTyid4veA',
      played_at: '2022-07-25T11:19:59.537Z',
      uri: 'spotify:track:6SiLKnvxXkh3GJTyid4veA',
      type: 'track',
      popularity: 36,
      description: 'Nharzin',
      title: 'A.L.A',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2733a3f72f4b9a6fe03c368a8ba',
    },
    {
      id: '18ICzd2SoSH7ymhAezZbiy',
      played_at: '2022-07-25T11:15:39.971Z',
      uri: 'spotify:track:18ICzd2SoSH7ymhAezZbiy',
      type: 'track',
      popularity: 42,
      description: 'Ya Omri',
      title: 'Furelise',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2736523d0118e5be83db9684702',
    },
    {
      id: '1rOalFQe0DO01zE1JJpxTa',
      played_at: '2022-07-25T11:11:34.112Z',
      uri: 'spotify:track:1rOalFQe0DO01zE1JJpxTa',
      type: 'track',
      popularity: 34,
      description: 'Story Insta',
      name: 'kouz1',
      avatar:
        'https://i.scdn.co/image/ab67616d0000b2731ff34792dd3fbf81ac4b4ac5',
    },
  ],
};
