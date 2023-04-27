import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";

const Cont = styled.div`
  display: inline-block;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  margin-bottom: 48px;
  align-items: center;
  text-align: center;
  .blk-line {
    position: relative;
    width: 25%;
    height: 2px;
    background-color: ${(props) => props.colors.black};
  }
`;
const Honey = ({ url, title, subTitle, func }) => {
  return (
    <Cont colors={COLORS}>
      <Image
        src={url}
        width={84.8}
        height={122.4}
        quality={100}
        style={{ objectFit: "contain" }}
        priority
      />
      <h3 className="cormorant-bold mar-bottom-4">{title}</h3>
      <div className="blk-line mar-bottom-8"></div>
      <h5 className="contrast mar-bottom-16">{subTitle}</h5>
      <div className="orange-btn">
        <h3>Add to Cart</h3>
      </div>
    </Cont>
  );
};

export default Honey;
