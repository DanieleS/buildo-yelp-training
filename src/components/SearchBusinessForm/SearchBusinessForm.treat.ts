import { style } from "treat";
import { defaultSpacing } from "../../style/constants";

export const form = style({
  padding: defaultSpacing,
});

export const input = style({
  marginBottom: defaultSpacing,
  width: "100%",
  ":last-child": {
    marginBottom: 0,
  },
});

export const fieldsWrapper = style({
  width: "100%",
});
