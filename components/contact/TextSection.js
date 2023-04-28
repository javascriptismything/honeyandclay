import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Cont = styled.div``;

const TextSection = () => {
  return (
    <Cont colors={COLORS}>
      <h1>How Can I Help You?</h1>
      <h3>Want to buy a product or any general inquiries?</h3>
      <div className="black-line"></div>
      <div className="flex">
        <FontAwesomeIcon icon={faEnvelope} className="black icon-sm" />
      </div>
    </Cont>
  );
};

export default TextSection;
