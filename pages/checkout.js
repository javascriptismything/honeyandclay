import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { AppContext } from "./_app";
import Items from "@/components/checkout/items";
import Summary from "@/components/checkout/summary";
const Cont = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  .content-holder {
    & > div {
      padding: 16px;
    }
  }
`;

const Checkout = () => {
  const [context, setContext] = useContext(AppContext);
  console.log(context);
  return (
    <Cont colors={COLORS}>
      <div className="black-line mar-bottom-32"></div>
      <div className="flex content-holder">
        <div className="flex-one">
          <Items items={context.items} />
        </div>

        <div className="flex-one">
          <Summary total={context.total} />
        </div>
      </div>
    </Cont>
  );
};

export default Checkout;
