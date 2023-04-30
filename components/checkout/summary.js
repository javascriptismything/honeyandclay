import { useState } from "react";
import styled from "styled-components";
import COLORS from "@/data/colors";

const Cont = styled.div``;

const Summary = ({ total }) => {
  return (
    <Cont colors={COLORS}>
      <h1 className="mar-bottom-8">Summary</h1>
      <div className="black-line mar-bottom-16"></div>
      <div className="flex space-between mar-bottom-8">
        <h4 className="light">Subtotal</h4>
        <h4>${total}</h4>
      </div>
      <div className="grey-line mar-bottom-32"></div>
      <p className="helevatica-bold mar-bottom-16">
        To complete this purchase please enter your contact details below.
      </p>
      <p className="helevatica-bold">
        We will contact you with delivery arrangements as soon as possible.
      </p>
    </Cont>
  );
};

export default Summary;
