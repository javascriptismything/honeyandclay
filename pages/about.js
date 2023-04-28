import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "../data/colors";

const Cont = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 128px;

  & > div {
    flex: 1;
  }
  .text {
    background-color: ${(props) => props.colors.tan3};
    padding: 32px;
    p {
      margin-bottom: 16px;
    }
    @media only screen and (max-width: 600px) {
      padding: 16px;
    }
  }
  .images {
    display: flex;
    flex-direction: column;
    flex: 1;

    & > div {
      background: red;
      flex: 1;
      height: 400px;

      &:nth-of-type(1) {
        background: url("/images/barb/barb1.jpg");
        background-size: cover;
        background-position: center;
      }
      &:nth-of-type(2) {
        background: url("/images/barb/barb2.jpg");
        background-size: cover;
        background-position: center;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    .images {
      & > div {
        flex: auto;
      }
    }
  }
`;

const About = () => {
  return (
    <Cont colors={COLORS}>
      {/*<div className="relative images">
         <div className="image-cont">
          <Image
            src={"/images/barb/barb1.jpg"}
            fill
            pos
            style={{ objectFit: "cover" }}
            className="image"
          />
        </div>
        <div className="image-cont">
          <Image
            src={"/images/barb/barb2.jpg"}
            fill
            style={{ objectFit: "cover" }}
            className="image"
          />
        </div> 
      </div>*/}
      <div className="flex images">
        <div></div>
        <div></div>
      </div>
      <div className="text">
        <h1>About Me</h1>
        <p>
          I have recently started beekeeping as a hobby project. I was very
          interested in it and took a beekeeping course a few years ago with
          Blue Shoes Honey, another great local honey producer. From their I
          bought my own hives, which I currently have two and been really
          enjoying it ever since.
        </p>
        <p>
          We also have a great 2 acre property in the Carp area, in which we use
          no pesticides or herbicides whatsoever. Our bees have access to all
          the flowers, pollen and nectar in our local area. Also, our house is
          surrounded by nature, trees and wildlife; which means the bees really
          have a great area to choose from!{" "}
        </p>
        <p>
          I also attend a beekeeping group in the local area for women from the
          military and really want to continue learning all there is about
          beekeeping.
        </p>
        <p>
          Another passion of mine is pottery, which I have taken various courses
          from and I am becoming very successful with it. I hope you can enjoy
          my pottery as much as I enjoy making it.
        </p>
      </div>
    </Cont>
  );
};

export default About;
