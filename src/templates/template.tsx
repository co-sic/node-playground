import React from "react";
import { Html, Body, Head, Container } from "jsx-email";

export const Template = () => (
  <Html>
    <Head />
    <Body>
      <Container>Hello</Container>
    </Body>
  </Html>
);

export default Template;
