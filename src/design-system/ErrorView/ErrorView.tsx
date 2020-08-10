import React from "react";
import errorIcon from "../../assets/images/error-icon.svg";
import { wrapper, content, icon } from "./ErrorView.treat";

type Props = {
  errorMessage?: string;
};

function ErrorView({ errorMessage = "An error occurred :(" }: Props) {
  return (
    <div className={wrapper}>
      <div className={content}>
        <img src={errorIcon} alt="" className={icon} />
        <div>{errorMessage}</div>
      </div>
    </div>
  );
}

export default ErrorView;
