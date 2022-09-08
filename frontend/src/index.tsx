import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./app/app";

ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);
