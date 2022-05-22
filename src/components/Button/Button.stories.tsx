import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "primary",
  variant: "primary",
};

export const White = Template.bind({});
White.args = {
  children: "white",
  variant: "white",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "danger",
  variant: "danger",
};
