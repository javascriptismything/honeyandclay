import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";
import { AppContext } from "./_app";
import Items from "@/components/checkout/items";
import Summary from "@/components/checkout/summary";
import { Toaster } from "react-hot-toast";
const Cont = styled.div`
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  .content-holder {
    & > div {
      padding: 16px;
    }
  }
  @media only screen and (max-width: 800px) {
    .content-holder {
      flex-direction: column-reverse;
    }
    width: 100%;
  }
`;

const Checkout = () => {
  const [context, setContext] = useContext(AppContext);
  console.log(context);
  return (
    <Cont colors={COLORS}>
      <Toaster />
      <div className="black-line mar-bottom-32"></div>
      <div className="flex content-holder">
        <div className="flex-one">
          <Items
            items={context.items}
            context={context}
            setContext={setContext}
          />
        </div>

        <div className="flex-one">
          <Summary total={context.total} />
        </div>
      </div>
    </Cont>
  );
};

export default Checkout;
