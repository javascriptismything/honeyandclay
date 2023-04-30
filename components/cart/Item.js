import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  background-color: ${(props) => props.colors.grey};
  padding: 8px 12px;
  .image-cont {
    position: relative;
    width: 100%;
    height: 100px;
  }
  .contrast {
    &:hover {
      color: ${(props) => props.colors.black};
    }
  }
`;

const Item = ({ title, price, dimensions, url, index, removeItem }) => {
  return (
    <Cont colors={COLORS} className="mar-bottom-32">
      <div className="flex space-between align-center mar-bottom-8">
        <h5>{title}</h5>
        <FontAwesomeIcon
          icon={faX}
          className="icon-ssm contrast cursor"
          onClick={() => removeItem(index)}
        />
      </div>
      <div className="black-line"></div>
      <h4 className="mar-bottom-4">${price}</h4>
      <p>{dimensions}</p>
      <div className="image-cont">
        <Image
          src={url}
          fill
          style={{ objectFit: "contain", backgroundPosition: "left" }}
        />
      </div>
    </Cont>
  );
};

export default Item;
