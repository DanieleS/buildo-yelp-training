import { style } from "treat";
import { lightGray, primaryColor } from "../../style/colors";
import { defaultSpacing } from "../../style/constants";
import { title } from "../../style/typography";

export const wrapper = style({
  display: "flex",
  alignItems: "flex-end",
});

export const starRating = style({
  color: lightGray,
  fontSize: "clamp(10px, 2vw, 20px)",
  width: "clamp(10px * 5, 2vw * 5, 100px)",
  position: "relative",
  padding: 0,
  marginRight: defaultSpacing / 2,
});

export const top = style({
  color: primaryColor,
  padding: 0,
  position: "absolute",
  zIndex: 1,
  display: "block",
  top: 0,
  left: 0,
  overflow: "hidden",
});

export const bottom = style({
  padding: 0,
  display: "block",
  zIndex: 0,
});

export const ratingAndCount = style({
  ...title.small,
});
