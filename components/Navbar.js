import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import COLORS from "@/pages/data/colors";
import Navcart from "./Navbar/Navcart";
const Cont = styled.div`
  .nav-desktop {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 16px;
    margin-bottom: 40px;
    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
  .nav-mobile {
    display: none;
    padding: 8px;
    background-color: ${(props) => props.colors.tan3};
    margin-bottom: 40px;
    @media only screen and (max-width: 800px) {
      display: block;
    }
  }
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
      <div className="nav-desktop">
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
      </div>
      <div className="nav-mobile">
        <div className="flex align-start space-between">
          <div>
            <Link href="/">
              <h5 className="underline-hover">Home</h5>
            </Link>

            <Link href="/pottery">
              <h5 className="underline-hover">Pottery</h5>
            </Link>

            <Link href="/honey">
              <h5 className="underline-hover">Honey</h5>
            </Link>

            <Link href="/about">
              <h5 className="underline-hover">About</h5>
            </Link>

            <Link href="/contact">
              <h5 className="underline-hover">Contact</h5>
            </Link>
          </div>
          <Navcart />
        </div>
      </div>
    </Cont>
  );
};

export default Navbar;
