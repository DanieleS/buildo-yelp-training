import { style } from "treat";
import { gray, primaryColor } from "../../../style/colors";
import { defaultSpacing } from "../../../style/constants";

export const buttonRow = style({
  width: "100%",
});

export const buttonWrapper = style({});

export const buttonElem = style({
  width: "100%",
  padding: `${defaultSpacing}px ${defaultSpacing / 2}px`,
  backgroundColor: primaryColor,
  color: "#ffffff",
  textTransform: "uppercase",
  border: "none",
  ":focus": {
    opacity: 0.7
  }
});
