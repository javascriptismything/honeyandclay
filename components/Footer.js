import Link from "next/link";
import React from "react";
import styled from "styled-components";
import COLORS from "@/pages/data/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Cont = styled.div`
  height: 200px;
  padding-right: 32px;
  padding-left: 32px;
  padding-bottom: 64px;
  @media only screen and (max-width: 700px) {
    padding: 8px;
  }
  .black-line-vert {
    height: 100%;
    width: 2px;
    background-color: ${(props) => props.colors.black};
    margin-right: 32px;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .flex {
    height: 100%;
  }
`;

const Footer = () => {
  return (
    <Cont colors={COLORS}>
      <div className="black-line mar-bottom-48"></div>
      <div className="flex space-between flex-wrap">
        <div className="mar-bottom-32">
          <Link href="/">
            <h5 className="underline-hover">Shop</h5>
          </Link>
          <div className="mar-bottom-16"></div>
          <Link href="/honey">
            <p className="underline-hover">Honey</p>
          </Link>
          <div className="mar-bottom-8"></div>
          <Link href="/honey">
            <p className="underline-hover">Clay</p>
          </Link>
        </div>
        <div className="mar-bottom-32">
          <Link href="/about">
            <h5 className="underline-hover">About</h5>
          </Link>
        </div>
        <div className="mar-bottom-32">
          <Link href="/contact">
            <h5 className="underline-hover">Contact</h5>
          </Link>
        </div>

        <div className="flex ">
          <div className="black-line-vert"></div>
          <div>
            <div className="flex-inline align-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="black icon-ssm mar-right-4"
              />
              <a href="mailto:kayakbarb@gmail.com">
                <h5 className="underline-hover">Kayakbarb@gmail.com</h5>
              </a>
            </div>
            <div className="mar-bottom-8"></div>
            <div className="flex-inline align-center">
              <FontAwesomeIcon
                icon={faInstagram}
                className="black icon-ssm mar-right-4"
              />
              <a
                href="https://www.instagram.com/barbpierceart/"
                target="_blank"
                rel="noreferrer"
              >
                <h5 className="underline-hover">@barbpierceart</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Cont>
  );
};

export default Footer;
