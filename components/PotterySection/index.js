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
    display: flex;
    width: 2400px;
  }
`;

const Index = () => {
  return (
    <Cont colors={COLORS}>
      <div className="splitter">
        <h1>Pottery</h1>
      </div>
      <div className="sm-spacer"></div>
      <div className="controls mar-bottom-16">
        <div className="flex justify-end padding-right-32">
          <div className="basic-icon mar-right-16">
            <FontAwesomeIcon icon={faChevronLeft} className="black icon-med" />
          </div>
          <div className="basic-icon">
            <FontAwesomeIcon icon={faChevronRight} className="black icon-med" />
          </div>
        </div>
      </div>
      <div className="padding-16">
        <div className="slideshow-holder">
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
