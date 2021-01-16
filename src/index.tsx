import React, { StrictMode } from "react";
import { render } from "react-dom";

import App from "@comp/app";

import "ress";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
