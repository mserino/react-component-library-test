import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {   Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem } from "../../src/components/ac";

export default {
  title: "Components/Button",
  component: Accordion,
};

// Create a master template for mapping args to render the Button component
const Template = (args) => (
  <Accordion>
  <AccordionItem>
  <AccordionHeader>
    Header
  </AccordionHeader>
  <AccordionContent>
    Content
  </AccordionContent>
  </AccordionItem>
</Accordion>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃", size: "large" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false, label: "Secondary 😇" };