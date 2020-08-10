import { style } from "treat";
import { rightSeparator } from "../../style/common";
import { title } from "../../style/typography";
import { defaultSpacing } from "../../style/constants";

export const header = style({
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  justifyContent: "space-between",
  "@media": {
    "screen and (max-width: 740px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const headerNoPhone = style({
  gridTemplateColumns: "1fr",
});

export const phoneNumber = style({
  justifySelf: "end",
  "@media": {
    "screen and (max-width: 740px)": {
      order: 1,
      justifySelf: "start",
      marginTop: defaultSpacing,
    },
  },
});

export const ratingPriceWrapper = style({
  display: "flex",
  alignItems: "center",
});

export const rating = style({
  ...rightSeparator,
});

export const price = style({
  ...title.small,
});
