import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Cont = styled.div`
  cursor: pointer;
  padding: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(props) => props.colors.tan};
  }
`;

const Navcart = () => {
  return (
    <Cont colors={COLORS}>
      <FontAwesomeIcon icon={faShoppingCart} className="black icon-sm" />
    </Cont>
  );
};

export default Navcart;
