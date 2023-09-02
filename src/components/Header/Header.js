import React from "react";
import { Nav, Logo, Button } from "./Header-Styles";

function Header() {
  return (
    <>
      <Nav>
        <Logo src="../images/logo.svg" alt="logo" />
        <Button>Try It Free</Button>
      </Nav>
    </>
  );
}

export default Header;
