import { Meta, Story } from "@storybook/react";
import Header, { HeaderProps } from ".";

export default {
  title: "components/Header",
  component: Header,
} as Meta;

export const Template: Story<HeaderProps> = (props) => <Header {...props} />;
Template.args = {
  name: "현진",
  type: "일반",
  isFriend: true,
};
