import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
const Honey = ({ url, title, subTitle, func }) => {
  const [val, setVal] = useState(1);

  const increaseVal = () => {
    setVal(val + 1);
  };
  const decreaseVal = () => {
    if (val == 1) return;
    setVal(val - 1);
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
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="input-select mar-right-8"
        />
        <div className="flex flex-column ">
          <div className="arrow-box mar-bottom-4" onClick={increaseVal}>
            <FontAwesomeIcon icon={faArrowUp} className=" icon-ssm" />
          </div>
          <div
            className={val == 1 ? "arrow-box inactive-arrow-box" : "arrow-box"}
            onClick={decreaseVal}
          >
            <FontAwesomeIcon icon={faArrowDown} className="  icon-ssm" />
          </div>
        </div>
      </div>
      <div className="orange-btn">
        <h3>Add to Cart</h3>
      </div>
    </Cont>
  );
};

export default Honey;
