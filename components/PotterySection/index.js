import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";
import PotteryPiece from "./PotteryPiece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const Cont = styled.div`
  overflow: hidden;
  .slideshow-holder {
    position: relative;
    padding: 32px;
    display: flex;
    width: 2400px;
    transition: left 0.5s ease-out;
  }
`;

const Index = () => {
  const [left, setLeft] = useState("0");
  const max_left = 2400;
  const slideRight = () => {
    if (Number(left) - window.innerWidth / 2 < -max_left) return;
    setLeft(String(Number(left) - window.innerWidth / 2));
  };
  const slideLeft = () => {
    if (window.innerWidth < Number(left) + window.innerWidth) return;
    setLeft(String(Number(left) + window.innerWidth / 2));
  };
  console.log("left");
  console.log(left);
  return (
    <Cont colors={COLORS}>
      <div className="splitter">
        <h1>Pottery</h1>
      </div>
      <div className="sm-spacer"></div>
      <div className="controls mar-bottom-16">
        <div className="flex justify-end padding-right-32">
          <div className="basic-icon mar-right-16" onClick={slideLeft}>
            <FontAwesomeIcon icon={faChevronLeft} className="black icon-med" />
          </div>
          <div className="basic-icon" onClick={slideRight}>
            <FontAwesomeIcon icon={faChevronRight} className="black icon-med" />
          </div>
        </div>
      </div>
      <div className="padding-16">
        <div
          className="slideshow-holder relative"
          style={{ left: `${left}px` }}
        >
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup1.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup1.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup1.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup1.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup2.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup2.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup2.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup2.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup2.png"}
          />
          <PotteryPiece
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            url={"/images/cup2.png"}
          />
        </div>
      </div>
    </Cont>
  );
};

export default Index;
