import { style } from "treat";
import {
  absoluteCenterWrapper,
  absoluteCenterElement,
} from "../../style/common";
import { title } from "../../style/typography";

export const wrapper = style({
  ...absoluteCenterWrapper,
});

export const content = style({
  ...absoluteCenterElement,
  ...title.medium,
  textAlign: "center",
});

export const icon = style({
  width: 80,
});
