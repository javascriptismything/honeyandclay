import { useState } from "react";
import COLORS from "@/data/colors";
import styled from "styled-components";

const Cont = styled.div`
  min-height: 100vh;
`;
const Thankyou = () => {
  return <Cont colors={COLORS}></Cont>;
};

export default Thankyou;
