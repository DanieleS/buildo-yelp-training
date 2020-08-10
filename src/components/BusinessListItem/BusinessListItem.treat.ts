import { style } from "treat";
import { defaultSpacing } from "../../style/constants";
import { title } from "../../style/typography";

export const linkWrapper = style({
  display: "block",
  color: "#000000",
  textDecoration: "none",
  maxWidth: 1024,
  margin: "auto",
});

export const item = style({
  display: "flex",
});

export const image = style({
  width: "clamp(100px, 20vw, 250px)",
  height: "clamp(100px, 20vw, 250px)",
  objectFit: "cover",
  display: "block",
});

export const infoContainer = style({
  padding: defaultSpacing,
  display: "flex",
  flexDirection: "column",
});

export const name = style({
  ...title.medium,
});

export const rating = style({
  marginTop: defaultSpacing,
});

export const price = style({
  marginTop: defaultSpacing,
  ...title.small,
});

export const phoneNumberWrapper = style({
  marginTop: "auto",
  "@media": {
    "screen and (max-width: 740px)": {
      display: "none",
    },
  },
});
