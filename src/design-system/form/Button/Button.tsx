import React from "react";
import cn from "classnames";
import { buttonRow, buttonWrapper, buttonElem } from "./Button.treat";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: Props) {
  return (
    <div className={cn(buttonRow, className)}>
      <div className={buttonWrapper}>
        <button className={buttonElem} {...props}>
          {children}
        </button>
      </div>
    </div>
  );
}

export default Button;
