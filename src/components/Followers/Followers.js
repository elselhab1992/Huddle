import React from "react";
import { Div, Heading } from "./Followers-Styles";

function Followers() {
  return (
    <Div>
      <div>
        <img src="../images/icon-communities.svg" alt="communities" />
        <Heading>1.4k+</Heading>
        <p> Communities Formed</p>
      </div>
      <div>
        <img src="../images/icon-messages.svg" alt="messages" />
        <Heading> 2.7m+</Heading>
        <p> Messages Sent</p>
      </div>
    </Div>
  );
}

export default Followers;
