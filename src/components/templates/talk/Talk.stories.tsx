import { Meta, Story } from "@storybook/react";
import Talk, { TalkProps } from ".";

export default {
  title: "templates/Talk",
  component: Talk,
} as Meta;

const Template: Story<TalkProps> = (props) => <Talk {...props} />;

export const Default = Template.bind({});
Default.args = {
  name: "현진",
  type: "일반",
  isFriend: false,
};
