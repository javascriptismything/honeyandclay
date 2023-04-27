import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import COLORS from "@/pages/data/colors";
const Cont = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 16px;
  .icon {
    border: 1px solid ${(props) => props.colors.black};
    padding: 8px 16px;
    min-width: 100px;
    margin-right: 8px;
    margin-left: 8px;
    text-align: center;
    h1,
    h2,
    h3,
    h4,
    h5 {
      transition: color 0.25s ease-out;
    }
    /*
    &:hover {
      background-color: ${(props) => props.colors.black};
      h1,
      h2,
      h3,
      h4,
      h5 {
        color: #fff;
      }
    } */
    &:hover {
      background-position: left;
      h1,
      h2,
      h3,
      h4,
      h5 {
        color: #fff;
      }
    }
    background: linear-gradient(to left, #fff 50%, #06060b 50%) right;
    background-size: 200%;
    transition: 0.5s ease-out;
  }
  .icon-holder {
    display: flex;
    align-items: center;
  }
`;

const Navbar = () => {
  return (
    <Cont colors={COLORS}>
      <div></div>
      <div className="icon-holder">
        <Link href="/">
          <div className="icon">
            <h3>Home</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="icon">
            <h3>Pottery</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="icon">
            <h3>Honey</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="icon">
            <h3>About</h3>
          </div>
        </Link>

        <Link href="/">
          <div className="icon">
            <h3>Contact</h3>
          </div>
        </Link>
      </div>
    </Cont>
  );
};

export default Navbar;
