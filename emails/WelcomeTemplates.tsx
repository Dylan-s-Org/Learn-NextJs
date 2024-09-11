import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplates = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="https://minhhuy11022000.github.io/dylanresume/">
            Here is my Resume
          </Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplates;
