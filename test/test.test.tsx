import React from "react";
import { render } from "@jsx-email/render";
import Template from "../src/templates/template";

test("Render function should return string", async () => {
  const html = await render(<Template />);
  expect(html).toBeDefined();
});
