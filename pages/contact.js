import { useState } from "react";
import styled from "styled-components";
import COLORS from "./data/colors";
const Cont = styled.div`
  img {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <Cont colors={COLORS}>
      <img src="/images/barb/barb1.jpg" />
      <ContactForm />
    </Cont>
  );
};

export default Contact;
