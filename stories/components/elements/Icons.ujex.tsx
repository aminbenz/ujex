import Icons from '../../../src/assets/icons/index';

export default {
  title: 'Components/Icons',
  component: Icons,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => (
  <Icons {...args}></Icons>
);

export const Default = Template.bind({});
