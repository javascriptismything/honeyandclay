import { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTurnUp,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faXmark, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import COLORS from "@/data/colors";
import Item from "./Item";
import { AppContext } from "@/pages/_app";
import Link from "next/link";
import { updateLocalStorage, clearLocalStorage } from "@/lib/utils";
import { removeFromCart, updateQuantity } from "@/lib/utils";
import toast, { Toaster } from "react-hot-toast";
const Cont = styled.div`
  .nav-cart {
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: ${(props) => props.colors.tan};
    }
  }
  .nav-cart-2 {
    cursor: pointer;

    border-radius: 50%;

    &:hover {
      background-color: ${(props) => props.colors.tan};
    }
  }
  h5 {
    margin-left: 0 !important;
  }
  .checkout {
    border-top: 2px solid black;
    padding-top: 16px;
    position: relative;
    &-text {
      h5,
      h5 {
        margin-bottom: 16px;
      }
    }
  }
  .dropdown {
    z-index: 5;
    background: ${(props) => props.colors.tan3};
    position: absolute;
    width: 400px;
    right: 0;
    top: 0;
    height: 100vh;

    padding: 16px;
    right: -400px;
    transition: right 0.25s ease;
    .title-spec {
      text-align: center;
      border-bottom: 2px solid black;
      padding-bottom: 16px;
      margin-bottom: 16px;
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 400px) {
      width: 100%;
    }
  }
  .base-btn {
    margin-bottom: 16px;
    margin-top: 16px;
  }
  .base-btn,
  .base-btn-invert {
    width: 100%;
  }
  .delete {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    position: relative;

    @media only screen and (max-width: 600px) {
      width: 61px;
      height: 61px;
    }
  }
  .circle-btn {
    h5 {
      transition: background-color 0.25s ease;
    }
    &:hover {
      h5 {
        background-color: ${(props) => props.colors.darkPurple};
      }
    }
  }
  .icon-x {
    font-size: 48px;
    color: black;
  }
  .items {
    max-height: 50vh;
    overflow-y: scroll;
    padding-bottom: 16px;
  }
  .cart-icon-holder {
    position: relative;
    cursor: pointer;
    &:hover {
      .icon-spec {
        color: ${(props) => props.colors.darkPurple};
      }
    }
  }
  .counter {
    position: absolute;
    color: white;
    top: -2px;
    right: -2px;
    background-color: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ShoppingCart = ({ dropdownActive, showDropdown, hideDropdown }) => {
  const [context, setContext] = useContext(AppContext);

  const updateQuantityFunctional = (title, quantity) => {
    updateQuantity(quantity, title, setContext);
  };

  const removeItem = (index) => {
    setContext((prevContext) => {
      const items = prevContext.items;
      const total = prevContext.total - items[index].price;
      items.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(items));
      return {
        ...prevContext,
        items: items,
        total: total,
      };
    });
  };

  const itemElems = context.items.map((item, index) => {
    return (
      <Item
        key={index}
        title={item.title}
        price={item.price}
        dimensions={item.dimensions}
        url={item.url}
        type={item.type}
        quantity={item.quantity}
        removeItem={removeItem}
        index={index}
        updateQuantityFunctional={updateQuantityFunctional}
      />
    );
  });
  const clearCart = () => {
    setContext({ items: [], total: 0, shipping: 0 });
    clearLocalStorage();
  };
  const sum = context.items.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <Cont colors={COLORS}>
      <Toaster />
      <div onClick={showDropdown} className="cart-icon-holder">
        {context.items.length > 0 && (
          <div className="counter">
            <p>{context.items.length}</p>
          </div>
        )}
        <div className="nav-cart">
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="icon-spec icon-sm"
          />
        </div>
      </div>
      <div
        className="dropdown"
        style={{ right: dropdownActive ? "0" : "-400px" }}
      >
        <div className="title-spec">
          <div></div>
          <h5>Shopping Cart</h5>
          <div onClick={hideDropdown} className="delete ">
            <div className="nav-cart">
              <FontAwesomeIcon
                icon={faArrowTurnUp}
                style={{ transform: "rotate(90deg)" }}
                className="icon-x icon-sm"
              />
            </div>
          </div>
        </div>

        <div className="items">
          {itemElems.length === 0 ? (
            <p style={{ textAlign: "center" }}>Your cart is empty</p>
          ) : (
            <>
              {itemElems}
              <div className="center-inline mar-bottom-16 mar-top-16">
                <button onClick={clearCart} className="orange-btn-lt">
                  <h5>Clear</h5>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="checkout">
          <div className="checkout-text">
            <h5>Checkout</h5>
            <h5>
              <span className="light">Items: </span>({itemElems.length})
            </h5>
            <h5>
              <span className="light">Total: </span> ${sum}
            </h5>
          </div>
          <div>
            <button
              onClick={hideDropdown}
              className="blue-btn-lt flex-100 justify-center"
            >
              <h5>Keep Shopping</h5>
            </button>
            {itemElems.length > 0 && (
              <Link href="/checkout" passHref title="Checkout">
                <button
                  onClick={hideDropdown}
                  className="blue-btn-invert flex-100 justify-center mar-top-16"
                >
                  <h5>Checkout</h5>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Cont>
  );
};

export default ShoppingCart;
