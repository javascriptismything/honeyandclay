import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import COLORS from "@/data/colors";
import { AppContext } from "@/pages/_app";
import Navcart from "./Navbar/Navcart";
import { getLocalStorage } from "@/lib/utils";
import ShoppingCart from "./cart/ShoppingCart";
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
  .icon-selected {
    background: black;
    h1,
    h2,
    h3,
    h4,
    h5 {
      color: #fff;
    }
  }
  .icon-holder {
    display: flex;
    align-items: center;
  }
`;

const Navbar = () => {
  const [context, setContext] = useContext(AppContext);
  const [dropdownActive, setDropdownActive] = useState(false);
  const showDropdown = () => {
    setDropdownActive(true);
  };
  const hideDropdown = () => {
    setDropdownActive(false);
  };

  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setContext((prev) => {
        return {
          ...prev,
          items: getLocalStorage(),
        };
      });
    }
  }, []);

  return (
    <Cont colors={COLORS}>
      <div className="nav-desktop">
        <div></div>
        <div className="icon-holder">
          <Link href="/">
            <div
              className={router.route == "/" ? "icon-selected icon" : "icon"}
            >
              <h3>Home</h3>
            </div>
          </Link>

          <Link href="/pottery">
            <div
              className={
                router.route == "/pottery" ? "icon-selected icon" : "icon"
              }
            >
              <h3>Pottery</h3>
            </div>
          </Link>

          <Link href="/honey">
            <div
              className={
                router.route == "/honey" ? "icon-selected icon" : "icon"
              }
            >
              <h3>Honey</h3>
            </div>
          </Link>

          <Link href="/about">
            <div
              className={
                router.route == "/about" ? "icon-selected icon" : "icon"
              }
            >
              <h3>About</h3>
            </div>
          </Link>

          <Link href="/contact">
            <div
              className={
                router.route == "/contact" ? "icon-selected icon" : "icon"
              }
            >
              <h3>Contact</h3>
            </div>
          </Link>
        </div>
        <div className="flex justify-end align-center">
          <ShoppingCart
            dropdownActive={dropdownActive}
            showDropdown={showDropdown}
            hideDropdown={hideDropdown}
          />
        </div>
      </div>
      <div className="nav-mobile">
        <div className="flex align-end space-between ">
          <div className="flex flex-start flex-one flex-wrap">
            <Link href="/">
              <h5 className="underline-hover mar-right-8">Home</h5>
            </Link>

            <Link href="/pottery">
              <h5 className="underline-hover mar-right-8">Pottery</h5>
            </Link>

            <Link href="/honey">
              <h5 className="underline-hover mar-right-8">Honey</h5>
            </Link>

            <Link href="/about">
              <h5 className="underline-hover mar-right-8">About</h5>
            </Link>

            <Link href="/contact">
              <h5 className="underline-hover mar-right-8">Contact</h5>
            </Link>
          </div>
          <ShoppingCart
            dropdownActive={dropdownActive}
            showDropdown={showDropdown}
            hideDropdown={hideDropdown}
          />
        </div>
      </div>
    </Cont>
  );
};

export default Navbar;
