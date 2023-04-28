import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div`
  background-color: ${(props) => props.colors.tan3};
  padding: 8px;
  z-index: 2;
  cursor: pointer;
  transition: background-color 0.25s ease;
  margin-right: 16px;
  margin-bottom: 16px;
  &:hover {
    background-color: ${(props) => props.colors.tan2};
  }
  .image-holder {
    position: relative;
    width: 100%;
    height: 240px;
  }
  .image-main-holder {
    padding: 16px;
  }
  width: 240px;
`;

const PotteryPiece = ({ title, description, price, dimensions, url }) => {
  return (
    <Cont colors={COLORS} className="pottery-piece">
      <div className="image-main-holder">
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
