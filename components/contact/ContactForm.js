import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  background-color: ${(props) => props.colors.tan2};
  padding: 32px;
`;

const ContactForm = () => {
  return (
    <Cont colors={COLORS}>
      <div className="input-line">
        <label htmlFor="name">
          <h4>Name</h4>
          <input type="text" name="name" placeholder="name" />
        </label>
      </div>
      <div className="input-line">
        <label htmlFor="name">
          <h4>Email</h4>
          <input type="text" name="name" placeholder="www.example.com" />
        </label>
      </div>
      <div className="input-line">
        <label htmlFor="name">
          <h4>Message</h4>
          <textarea type="text" name="name" placeholder="Message"></textarea>
        </label>
      </div>
      <div className="flex justify-end">
        <div className="orange-btn flex align-center">
          <h4 className="mar-right-8">Send</h4>
          <FontAwesomeIcon icon={faPaperPlane} className="white icon-sm" />
        </div>
      </div>
    </Cont>
  );
};

export default ContactForm;
