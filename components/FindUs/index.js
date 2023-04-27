import Link from "next/link";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
const Map = dynamic(() => import("./Map"), {
  ssr: false,
});
const Cont = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px;
  .underline {
    &:hover {
      color: blue;
    }
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    padding: 8px;
  }
`;

const Index = () => {
  return (
    <Cont colors={COLORS}>
      <div className="flex-one">
        <h1>Find Us Here.</h1>
        <h3 className="contrast mar-bottom-32">Pickup right from the hive!</h3>
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/Barbs+Honey/@45.31076,-76.0738949,17z/data=!3m1!4b1!4m6!3m5!1s0x4cd2031db0163af1:0x545d27221d454e46!8m2!3d45.31076!4d-76.07132!16s%2Fg%2F11txqqqzyr"
        >
          <div className="flex-inline">
            <FontAwesomeIcon
              icon={faMapPin}
              className="icon-ssm black mar-right-8"
            />
            <p className="underline">159 Country Meadow Drive, Carp, Ontario</p>
          </div>
        </Link>
      </div>
      <div className="flex-one">
        <Map />
      </div>
    </Cont>
  );
};

export default Index;
