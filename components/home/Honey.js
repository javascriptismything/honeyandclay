import { useContext, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "@/lib/utils";
import { AppContext } from "@/pages/_app";
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
  .arrow-box {
    border: 1px solid ${(props) => props.colors.darkGreen};
    cursor: pointer;
    &:hover {
      border: 1px solid ${(props) => props.colors.black};
      .icon-ssm {
        color: ${(props) => props.colors.black};
      }
    }
    .icon-ssm {
      color: ${(props) => props.colors.darkGreen};
    }
  }
  .inactive-arrow-box {
    border: 1px solid ${(props) => props.colors.darkGrey};
    .icon-ssm {
      color: ${(props) => props.colors.darkGrey};
    }
    cursor: default;
    &:hover {
      border: 1px solid ${(props) => props.colors.darkGrey};
      .icon-ssm {
        color: ${(props) => props.colors.darkGrey};
      }
    }
  }
`;
const Honey = ({ url, title, subTitle, price, func }) => {
  const [context, setContext] = useContext(AppContext);
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity == 1) return;
    setQuantity(quantity - 1);
  };

  const addToCartFunctional = () => {
    setContext((prevContext) => {
      return {
        ...prevContext,
        showSidebar: true,
      };
    });
    addToCart(
      title,
      price * quantity,
      url,
      "",
      "",
      quantity,
      "honey",
      context,
      setContext
    );
  };
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
      <div className="flex align-center mar-bottom-8">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="input-select mar-right-8"
        />
        <div className="flex flex-column ">
          <div className="arrow-box mar-bottom-4" onClick={increaseQuantity}>
            <FontAwesomeIcon icon={faArrowUp} className=" icon-ssm" />
          </div>
          <div
            className={
              quantity == 1 ? "arrow-box inactive-arrow-box" : "arrow-box"
            }
            onClick={decreaseQuantity}
          >
            <FontAwesomeIcon icon={faArrowDown} className="  icon-ssm" />
          </div>
        </div>
      </div>
      <div className="orange-btn" onClick={addToCartFunctional}>
        <h3>Add to Cart</h3>
      </div>
    </Cont>
  );
};

export default Honey;
