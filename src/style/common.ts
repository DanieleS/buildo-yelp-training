import { Style } from "treat/lib/types";
import { primaryColor } from "./colors";
import { defaultSpacing } from "./constants";

export const resetList: Style = {
  listStyle: "none",
  padding: 0,
};

export const absoluteCenterWrapper: Style = {
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
};

export const absoluteCenterElement: Style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const rightSeparator: Style = {
  ":after": {
    content: "'●'",
    fontSize: 10,
    lineHeight: "clamp(13px, 2vw, 20px)",
    display: "inline-block",
    margin: `0 ${defaultSpacing}px`,
  },
};
