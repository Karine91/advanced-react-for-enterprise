import React from "react";

import Color from "./Color";
import { text, select } from "@storybook/addon-knobs";
import "@gkarine/scss/lib/Utilities.css";

import Spacing from "@gkarine/foundation/lib/Spacing";

export default {
  title: "Atoms/Color",
};

export const Common = () => <Color hexCode={text("HexCode", "pink")} />;
export const CustomDimensions = () => (
  <Color
    hexCode={text("HexCode", "pink")}
    width={select("Width", Object.values(Spacing), "xxl")}
    height={select("Height", Object.values(Spacing), "xxl")}
  />
);
