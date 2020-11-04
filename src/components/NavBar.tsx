import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  background-color: #999966;
  height: 70px;
  display: flex;
`;

const Logo = styled.div`
  margin: auto;
  font-size: 3em;
  color: white;
  cursor: pointer;
`;

export const NavBar = () => {
  const router = useRouter();

  return (
    <Bar>
      <Link href="/">
        <Logo>Blog of Posts</Logo>
      </Link>
    </Bar>
  );
};
