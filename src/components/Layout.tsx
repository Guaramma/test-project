import React from "react";
import { NavBar } from "./NavBar";
import { Wrapper } from "./Wrapper";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Layout;
