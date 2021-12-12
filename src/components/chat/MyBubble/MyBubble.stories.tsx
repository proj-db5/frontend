import { Meta, Story } from "@storybook/react";
import MyBubble, { MyBubbleProps } from ".";

export default {
  title: "components/MyBubble",
  component: MyBubble,
} as Meta;

const Template: Story<MyBubbleProps> = (props) => <MyBubble {...props} />;

export const Rendezvous = Template.bind({});
Rendezvous.args = {
  isRendezvous: true,
  text: "앗 아니요! 아직 확인은 ..!",
  time: "오후 2:22",
  location: "공학관",
  delTime: new Date(),
};

export const NotRendezvous = Template.bind({});
NotRendezvous.args = {
  isRendezvous: false,
  text: "테슬라 모델 Y 좋네요...",
  time: "오후 2:22",
};
