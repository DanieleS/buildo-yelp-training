import { style } from "treat";
import { lightGray } from "../../style/colors";

export const card = style({
  borderRadius: 10,
  overflow: "hidden",
  border: `1px solid ${lightGray}`,
  boxShadow: `0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)`,
});
