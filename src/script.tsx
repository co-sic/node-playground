import React from "react";

import { Template } from "./templates/template";
import { render } from "@jsx-email/render";

(async () => {
  const text = await render(<Template />);
  console.log(text);
})();
