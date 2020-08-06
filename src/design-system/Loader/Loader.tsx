import React from "react";
import { loader, loaderWrapper } from "./Loader.treat";

function Loader() {
  return (
    <div className={loaderWrapper}>
      {" "}
      <div className={loader} />
    </div>
  );
}

export default Loader;
