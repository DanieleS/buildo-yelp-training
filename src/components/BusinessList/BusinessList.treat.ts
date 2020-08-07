import { style } from "treat";
import { resetList } from "../../style/common";
import { defaultSpacing } from "../../style/constants";

export const list = style({
  ...resetList,
  margin: defaultSpacing,
});

export const listItem = style({
  marginBottom: defaultSpacing,
  ":last-child": {
    marginBottom: 0,
  },
});
