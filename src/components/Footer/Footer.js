import React from "react";
import {
  Container,
  Div,
  Heading,
  Span,
  InputDiv,
  Input,
  Button,
} from "./Footer-Styles";

function Footer() {
  return (
    <Container>
      <Div>
        <Heading>Huddle</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
          quam, hendrerit lacinia vestibulum a, ultrices quis sem.
        </p>
        <p>
          <Span>
            <img src="../images/icon-phone.svg" alt="phone" />
          </Span>
          Phone: +1-543-123-4567
        </p>
        <p>
          <Span>
            <img src="../images/icon-email.svg" alt="email" />
          </Span>
          example@huddle.com
        </p>
      </Div>
      <Div>
        <Heading>Newsletter</Heading>
        <p>
          To recieve tips on how to grow your community, sign up to our weekly
          newsletter. We'll never send you spam or pass on your email address
        </p>
        <InputDiv>
          <Input type="text" name="text" />
          <Button>Subscribe</Button>
        </InputDiv>
      </Div>
    </Container>
  );
}

export default Footer;
