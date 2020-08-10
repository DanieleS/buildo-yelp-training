import { style } from "treat";
import { defaultSpacing } from "../../style/constants";

export const mainWrapper = style({
  padding: defaultSpacing,
});

export const details = style({
  display: "grid",
  gridTemplateColumns: "3fr 2fr",
  marginTop: defaultSpacing * 2,
  "@media": {
    "screen and (max-width: 740px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const location = style({});

export const openingHours = style({
  marginLeft: defaultSpacing * 2,
  justifySelf: "end",
  "@media": {
    "screen and (max-width: 740px)": {
      margin: 0,
      justifySelf: "start",
    },
  },
});
