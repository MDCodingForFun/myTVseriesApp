import React from "react";
import loaderSrc from "../assets/loader.gif";

export default function LoaderComponent(props) {
  return (
    <div>
      <img alt="loader icon" src={loaderSrc} />
    </div>
  );
}
