import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
const Cont = styled.div`
  padding-left: 32px;
  @media only screen and (max-width: 800px) {
    padding-left: 16px;
  }
  .spacer {
    margin-bottom: 128px;
  }
  @media only screen and (max-width: 700px) {
    padding: 0;
    .spacer {
      margin-bottom: 48px;
    }
  }
  @media only screen and (max-width: 400px) {
    padding: 8px;
  }
`;

const TextPreview = ({ title, description, dimensions, price }) => {
  return (
    <Cont colors={COLORS}>
      <h1>{title}</h1>
      <div className="black-line mar-bottom-16"></div>
      <p className=" mar-bottom-8">{description}</p>
      <p className="mar-bottom-8">{dimensions}</p>
      <h3>${price}</h3>
      <div className="spacer"></div>
      <div className="orange-btn-lt">
        <h3>Add to Cart</h3>
      </div>
    </Cont>
  );
};

export default TextPreview;
