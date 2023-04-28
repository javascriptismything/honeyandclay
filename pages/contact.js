import { useState } from "react";
import styled from "styled-components";
import COLORS from "./data/colors";
import ContactForm from "@/components/contact/ContactForm";
import TextSection from "@/components/contact/TextSection";
import FindUs from "../components/FindUs";

const Cont = styled.div`
  img {
    width: 100%;
  }
  .head-content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    @media only screen and (max-width: 800px) {
      flex-direction: column-reverse;
    }
    & > div {
      flex: 1;
    }
  }
`;

const Contact = () => {
  return (
    <Cont colors={COLORS}>
      <div className="head-content">
        <div>
          <ContactForm />
        </div>
        <div>
          <TextSection />
        </div>
      </div>
      <div className="sm-spacer"></div>
      <FindUs />
    </Cont>
  );
};

export default Contact;
