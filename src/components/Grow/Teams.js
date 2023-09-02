import React from "react";
import { Container, Div, Card, Text, Heading } from "./Teams-Styles";

function Teams() {
  return (
    <Container>
      <Div>
        <Text>
          <Heading> Grow Together</Heading>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </Text>
        <Card
          src="../images/illustration-grow-together.svg"
          alt="grow together"
        />
      </Div>
      <Div>
        <Card
          src="../images/illustration-flowing-conversation.svg"
          alt="Flow"
        />
        <Text>
          <Heading> Grow Together</Heading>
          <p>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </p>
        </Text>
      </Div>
      <Div>
        <Text>
          <Heading> Your Users</Heading>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </Text>
        <Card src="../images/illustration-your-users.svg" alt="users" />
      </Div>
    </Container>
  );
}

export default Teams;
