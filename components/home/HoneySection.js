import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Honey from "./Honey";

const Cont = styled.div`
  .honey-holder {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
  }
`;
const HoneySection = () => {
  return (
    <Cont colors={COLORS}>
      <div className="splitter">
        <h1>Honey</h1>
      </div>
      <div className="sm-spacer"></div>
      <div className="honey-holder">
        <Honey
          title="Raw, Unheated Honey (1 lb)"
          subTitle="$15 / lb"
          url="/images/honey.png"
        />
        <Honey
          title="Raw, Unheated Honey (3 lb)"
          subTitle="$40 for 3 lbs"
          url="/images/honey.png"
        />
      </div>
    </Cont>
  );
};

export default HoneySection;
