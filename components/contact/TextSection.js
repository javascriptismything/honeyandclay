import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Cont = styled.div`
  padding: 32px;
  @media only screen and (max-width: 600px) {
    padding: 16px;
  }
`;

const TextSection = () => {
  return (
    <Cont colors={COLORS}>
      <h1 className="mar-bottom-8">How Can I Help You?</h1>
      <h3 className="mar-bottom-32">
        Want to buy a product or any general inquiries?
      </h3>
      <div className="black-line mar-bottom-32"></div>

      <div className="flex align-center mar-bottom-16">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="black icon-ssm mar-right-8"
        />
        <a href="mailto:kayakbarb@gmail.com" target="_blank">
          {" "}
          <h5 className="underline-hover">kayakbarb@gmail.com</h5>{" "}
        </a>
      </div>

      <div className="flex align-center">
        <FontAwesomeIcon
          icon={faInstagram}
          className="black icon-ssm mar-right-8"
        />
        <a href="https://www.instagram.com/barbpierceart/" target="_blank">
          {" "}
          <h5 className="underline-hover">@barbpierceart</h5>{" "}
        </a>
      </div>
    </Cont>
  );
};

export default TextSection;
