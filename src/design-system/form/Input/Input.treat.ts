import { style } from "treat";
import { gray } from "../../../style/colors";
import { defaultSpacing } from "../../../style/constants";

export const inputRow = style({
  width: "100%",
});

export const inputLabel = style({
    marginBottom: defaultSpacing / 2
});

export const inputWrapper = style({});

export const inputElem = style({
  width: "100%",
  border: `1px solid ${gray}`,
  padding: `${defaultSpacing}px ${defaultSpacing / 2}px`,
});
