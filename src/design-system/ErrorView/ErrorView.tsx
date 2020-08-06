import React from "react";
import errorIcon from "../../assets/images/error-icon.svg";
import { wrapper, content, icon } from "./ErrorView.treat";

function ErrorView() {
  return (
    <div className={wrapper}>
      <div className={content}>
        <img src={errorIcon} alt="" className={icon} />
        <div>An error occurred :(</div>
      </div>
    </div>
  );
}

export default ErrorView;
