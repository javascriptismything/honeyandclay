import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  background-color: ${(props) => props.colors.grey};
  padding: 8px 12px;
  margin-right: 16px;
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

const Item = ({
  title,
  price,
  dimensions,
  url,
  index,
  removeItem,
  type,
  quantity,
  updateQuantityFunctional,
}) => {
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
      <h4 className="mar-bottom-4">
        ${price}
        {type == "honey" && <span> ea</span>}
      </h4>
      <p>{dimensions}</p>
      <div className="image-cont">
        <Image
          src={url}
          fill
          style={{ objectFit: "contain", backgroundPosition: "left" }}
        />
      </div>
      {type == "honey" && (
        <div className="flex align-center mar-bottom-8">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input-select mar-right-8"
          />
          <div className="flex flex-column ">
            <div
              className="arrow-box mar-bottom-4"
              onClick={() => updateQuantityFunctional(title, quantity + 1)}
            >
              <FontAwesomeIcon icon={faArrowUp} className=" icon-ssm" />
            </div>
            <div
              className={
                quantity == 1 ? "arrow-box inactive-arrow-box" : "arrow-box"
              }
              onClick={() =>
                quantity > 1 && updateQuantityFunctional(title, quantity - 1)
              }
            >
              <FontAwesomeIcon icon={faArrowDown} className="  icon-ssm" />
            </div>
          </div>
        </div>
      )}
    </Cont>
  );
};

export default Item;
