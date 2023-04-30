import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const Cont = styled.div`
  .image-cont {
    width: 100px;
    height: 100px;
    position: relative;
    padding: 16px;
    margin-right: 16px;
    background-color: ${(props) => props.colors.tan3};
  }

  .image-inner-cont {
    position: relative;

    height: 100%;
    width: 100%;
  }
  .text {
  }
  .contrast {
    &:hover {
      color: ${(props) => props.colors.black};
    }
  }
`;

const Item = ({
  title,
  description,
  dimensions,
  price,
  quantity,
  url,
  type,
}) => {
  return (
    <Cont colors={COLORS}>
      <div className="flex">
        <div className="image-cont">
          <div className="image-inner-cont">
            <Image
              src={url}
              fill
              style={{ objectFit: "contain" }}
              alt={title}
            />
          </div>
        </div>
        <div className="flex text space-between flex-one">
          <div>
            <h4>{title}</h4>
            <p className="mar-bottom-8">{description}</p>
            <p className="mar-bottom-8">{dimensions}</p>

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
                    onClick={() =>
                      updateQuantityFunctional(title, quantity + 1)
                    }
                  >
                    <FontAwesomeIcon icon={faArrowUp} className=" icon-ssm" />
                  </div>
                  <div
                    className={
                      quantity == 1
                        ? "arrow-box inactive-arrow-box"
                        : "arrow-box"
                    }
                    onClick={() =>
                      quantity > 1 &&
                      updateQuantityFunctional(title, quantity - 1)
                    }
                  >
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="  icon-ssm"
                    />
                  </div>
                </div>
              </div>
            )}

            <FontAwesomeIcon
              icon={faTrash}
              className="icon-ssm contrast cursor"
            />
          </div>

          <h4>${price * quantity}</h4>
        </div>
      </div>
      <div className="mar-bottom-16"></div>
      <div className="grey-line mar-bottom-16"></div>
    </Cont>
  );
};

export default Item;
