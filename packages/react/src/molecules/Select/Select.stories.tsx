import React from "react";
import { withA11y } from "@storybook/addon-a11y";

import Select from "./Select";

import "@gkarine/scss/lib/Select.css";

export default {
  title: "Molecules/Select",
  decorators: [withA11y],
};

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

export const Common = () => <Select options={options} />;
export const RenderOption = () => (
  <Select
    options={options}
    renderOption={({ getOptionRecommendedProps, option, isSelected }) => (
      <span {...getOptionRecommendedProps()}>
        {option.label} {isSelected ? " - SELECTED!" : ""}
      </span>
    )}
  />
);

export const CustomLabel = () => (
  <Select label="Select a color" options={options} />
);
