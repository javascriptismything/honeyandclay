import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";

const Cont = styled.div`
  background-color: ${(props) => props.colors.tan3};
  padding: 8px;
  z-index: 2;
  cursor: pointer;
  transition: background-color 0.25s ease;
  margin-right: 32px;
  &:hover {
    background-color: ${(props) => props.colors.tan2};
  }
  .image-holder {
    position: relative;
    width: 100%;
    height: 240px;
  }
  width: 240px;
`;

const PotteryPiece = ({ title, description, price, dimensions, url }) => {
  return (
    <Cont colors={COLORS}>
      <div className="padding-32">
        <div className="image-holder">
          <Image
            fill
            src={url}
            priority
            quality={100}
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
      <h4 className="mar-bottom-4 ">{title}</h4>
      <p>{description}</p>
      <div className="flex space-between align-center">
        <h4>${price}</h4>
        <p>{dimensions}</p>
      </div>
    </Cont>
  );
};

export default PotteryPiece;