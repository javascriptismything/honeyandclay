import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const Cont = styled.div`
  overflow: hidden;
  width: 100%;
`;

const Layout = ({ children, value }) => {
  return (
    <>
      <Navbar />
      <Cont>{children}</Cont>
      <Footer />
    </>
  );
};

export default Layout;
