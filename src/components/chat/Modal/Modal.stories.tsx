import { Meta, Story } from "@storybook/react";
import { useState } from "react";
import Modal, { ModalProps } from ".";

export default {
  title: "components/Modal",
  component: Modal,
} as Meta;

export const Template: Story<ModalProps> = (props) => {
  const [time, setTime] = useState(30);
  return <Modal {...props} time={time} setTime={setTime} />;
};
Template.args = {
  isOpen: true,
};
