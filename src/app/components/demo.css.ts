import { style } from "@vanilla-extract/css";
import { cloneDeep } from "lodash-es";

const test = cloneDeep;

export const demo = style({
  color: "red",
});
