import { style } from "treat";
import { primaryColor } from "../../style/colors";

export const wrapperCommon = style({
  width: "100%",
  height: "clamp(200px, 30vw, 400px)",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column"
});

const imageBorder = `3px solid ${primaryColor}`;

export const imageSingle = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderBottom: imageBorder,
});

export const imageMultiple = style({
  objectFit: "cover",
  width: "70%",
  height: "100%",
  borderBottom: imageBorder,
  selectors: {
    ["&:nth-child(n+2)"]: {
      width: "30%",
      height: "50%",
      borderLeft: imageBorder,
    },
  },
});
