import React from "react";

import { Template } from "./templates/template";
import { render } from "jsx-email";

(async () => {
  const text = await render(<Template />);
  console.log(text);
})();
