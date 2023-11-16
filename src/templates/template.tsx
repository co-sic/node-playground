import { Html } from "@jsx-email/html";
import React from "react";
import { Body } from "@jsx-email/body";
import { Head } from "@jsx-email/head";
import { Container } from "@jsx-email/container";

export const Template = () => (
  <Html>
    <Head />
    <Body>
      <Container>Hello</Container>
    </Body>
  </Html>
);

export default Template;
