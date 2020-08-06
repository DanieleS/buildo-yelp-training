import { style } from "treat";
import { absoluteCenterWrapper } from "../../style/common";

const loaderSize = 70;

export const loaderWrapper = style({
  ...absoluteCenterWrapper,
  backgroundColor: "rgba(255, 255, 255, 0.6)",
});

const borderSize = "7px";
const lightBorder = `${borderSize} solid rgba(0, 0, 0, 0.1)`;

export const loader = style({
  position: "absolute",
  top: `calc(50% - ${loaderSize / 2}px)`,
  left: `calc(50% - ${loaderSize / 2}px)`,
  borderRadius: "50%",
  width: loaderSize,
  height: loaderSize,
  borderTop: lightBorder,
  borderRight: lightBorder,
  borderBottom: lightBorder,
  borderLeft: `${borderSize} solid rgba(0, 0, 0, 0.3)`,
  animationTimingFunction: "linear",
  animationDuration: "1.2s",
  animationIterationCount: "infinite",
  "@keyframes": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});
