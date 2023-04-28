import { useState } from "react";
import styled from "styled-components";
import COLORS from "./data/colors";
import ContactForm from "@/components/contact/ContactForm";
import TextSection from "@/components/contact/TextSection";
const Cont = styled.div`
  img {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <Cont colors={COLORS}>
      <ContactForm />
      <TextSection />
    </Cont>
  );
};

export default Contact;
