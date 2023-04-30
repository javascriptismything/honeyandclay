import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/data/colors";
import ImagePreview from "@/components/pottery/ImagePreview";
import TextPreview from "@/components/pottery/TextPreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { addToCart, removeFromCart } from "@/lib/utils";
import { AppContext } from "../_app";
import toast, { Toaster } from "react-hot-toast";

const Cont = styled.div`
  padding: 32px;
  min-height: 100vh;
  .content-holder {
    max-width: 1400px;

    margin: 0 auto;
    @media only screen and (max-width: 700px) {
      flex-direction: column;
      .image-preview {
        margin-bottom: 32px;
      }
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 16px;
  }
  @media only screen and (max-width: 400px) {
    padding: 0;
  }

  .fullscreen-image {
    z-index: 1;
    display: none;

    transition: opacity 0.25s ease;
    position: absolute;
    background: #fff;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0px;
    div.image-cont-full {
      position: relative;
      width: 100%;
      height: 100%;
    }
  }
  .fullscreen {
    display: block;
    opacity: 1;
    padding: 48px;
    @media only screen and (max-width: 600px) {
      padding: 16px;
    }
    @media only screen and (max-width: 300px) {
      padding: 8px;
    }
  }

  .close {
    background: ${(props) => props.colors.grey};
    z-index: 5;
    width: 56px;
    height: 56px;
    position: absolute;
    top: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid ${(props) => props.colors.darkBlue};
    transition: background-color 0.25s ease;
    &:hover {
      background-color: ${(props) => props.colors.darkBlue};
      .icon-spec {
        color: ${(props) => props.colors.grey};
      }
    }

    .icon-spec {
      transition: color 0.25s ease;
      font-size: 40px;
    }
    @media only screen and (max-width: 600px) {
      width: 40px;
      height: 40px;
      padding: 8px;
      .icon-spec {
        width: 24px;
        height: 24px;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    width: 32px;
    height: 32px;
    padding: 8px;
    .icon-spec {
      width: 24px;
      height: 24px;
    }
  }
`;

const Pottery = () => {
  const pottery = {
    title: "Mug With Secret Handle",
    price: 25,
    url: "/images/cup1.png",
    description: "Light blue + light yellow",
    dimensions: '4" x 12"',
  };
  const [context, setContext] = useContext(AppContext);
  const [inCart, setInCart] = useState(
    context.items.some((item) => item.title == pottery.title)
  );
  useEffect(() => {
    setInCart(context.items.some((item) => item.title == pottery.title));
  }, [context]);

  const images = [
    "/images/cup2.png",
    "/images/cup1.png",
    "/images/cup2.png",
    "/images/cup2.png",
  ];
  const [fullscreen, setFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [curImage, setCurImage] = useState(images[0]);

  const addToCartFunctional = () => {
    setInCart(true);
    addToCart(
      pottery.title,
      pottery.price,
      pottery.url,
      pottery.dimensions,
      pottery.description,
      1,
      context,
      setContext
    );
  };
  const removeFromCartFunctional = () => {
    setInCart(false);
    removeFromCart(pottery.title, pottery.price, setContext);
  };

  return (
    <Cont colors={COLORS}>
      <Toaster />
      <div
        className={
          fullscreen ? "fullscreen fullscreen-image" : "  fullscreen-image"
        }
      >
        <div className="image-cont-full">
          <Image
            src={curImage}
            fill
            style={{ objectFit: "contain", objectPosition: "top" }}
            alt="Preview image"
          />
          <div
            onClick={() => {
              setFullscreen(false);
            }}
            className="close"
          >
            <FontAwesomeIcon
              className="icon-spec dark-blue icon-lg"
              icon={faLeftLong}
            />
          </div>
        </div>
      </div>
      <div className="flex content-holder">
        <div className="flex-one image-preview">
          <ImagePreview
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            curImage={curImage}
            setCurImage={setCurImage}
            images={images}
            setFullscreen={setFullscreen}
          />
        </div>
        <div className="flex-one text-preview">
          <TextPreview
            title="Mug With Handle"
            description="Light blue + light yellow"
            dimensions='4" x 12"'
            price="25"
            inCart={inCart}
            addToCartFunctional={addToCartFunctional}
            removeFromCartFunctional={removeFromCartFunctional}
          />
        </div>
      </div>
      <div className="sm-spacer"></div>
    </Cont>
  );
};

export default Pottery;
