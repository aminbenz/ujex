import { Track } from '../../../../src';

export default {
  title: 'Components/Track',
  component: Track,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Track>;

const Template: ComponentStory<typeof Track> = (args) => (
  <Track {...args}></Track>
);

export const Default = Template.bind({});
Default.args = {
  id: '1',
  name: 'song name',
  album_name: 'album_name',
  artist_name: 'artist_name',
  duration_ms: 12,
  added_at: 'added_at',
  uri: '',
};

export {};
