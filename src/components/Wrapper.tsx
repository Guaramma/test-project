import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

export const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};
