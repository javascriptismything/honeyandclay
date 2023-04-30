import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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

const TextPreview = ({
  title,
  description,
  dimensions,
  price,
  inCart,
  addToCartFunctional,
  removeFromCartFunctional,
}) => {
  return (
    <Cont colors={COLORS}>
      <h1>{title}</h1>
      <div className="black-line mar-bottom-16"></div>
      <p className=" mar-bottom-8">{description}</p>
      <p className="mar-bottom-8">{dimensions}</p>
      <h3>${price}</h3>
      <div className="spacer"></div>
      {!inCart ? (
        <div className="blue-btn-lt" onClick={addToCartFunctional}>
          <h3>Add to Cart</h3>
        </div>
      ) : (
        <div
          className="orange-btn-lt flex-inline align-center"
          onClick={removeFromCartFunctional}
        >
          <h3 className="mar-right-8">Remove From Cart</h3>
          <FontAwesomeIcon icon={faTrash} className="white icon-ssm" />
        </div>
      )}
    </Cont>
  );
};

export default TextPreview;
