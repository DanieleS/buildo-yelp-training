import React from "react";
import cn from "classnames";
import { inputRow, inputLabel, inputWrapper, inputElem } from "./Input.treat";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

function Input({ label, className, ...props }: Props) {
  return (
    <div className={cn(inputRow, className)}>
      <div className={inputLabel}>{label}</div>
      <div className={inputWrapper}>
        <input {...props} className={inputElem}/>
      </div>
    </div>
  );
}

export default Input;
