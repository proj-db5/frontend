import { Meta, Story } from "@storybook/react";
import Bubble, { BubbleProps } from ".";

export default {
  title: "components/Bubble",
  component: Bubble,
} as Meta;

const Template: Story<BubbleProps> = (props) => <Bubble {...props} />;

export const Default = Template.bind({});
Default.args = {
  text: "이번에 스팩 보셨어요? 연비 장난아니던데",
  time: "오후 2:22",
};
