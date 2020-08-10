import { style } from "treat";
import { lightGray } from "../../style/colors";

export const layout = style({
  display: "flex",
  "@media": {
    "screen and (max-width: 900px)": {
      flexDirection: "column",
    },
  },
});

export const main = style({
  position: "relative",
  flexGrow: 1,
  flexShrink: 0,
  minHeight: "50vh",
});

const sidebarBorder = `1px solid ${lightGray}`;

export const sidebar = style({
  flexShrink: 1,
  minWidth: 300,
  borderRight: sidebarBorder,
  height: "100vh",
  position: "sticky",
  top: 0,
  "@media": {
    "screen and (max-width: 900px)": {
      flexDirection: "column",
      borderRight: "none",
      borderBottom: sidebarBorder,
      height: "auto",
      position: "static",
    },
  },
});
