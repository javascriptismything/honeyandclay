import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styled from "styled-components";
import COLORS from "@/data/colors";
const Cont = styled.div`
  .image-cont {
    width: 100%;
    height: 600px;
    position: relative;
    background-color: ${(props) => props.colors.tan3};
    margin-bottom: 8px;
    padding: 32px;
    cursor: pointer;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: ${(props) => props.colors.tan2};
    }
  }
  @media only screen and (max-width: 500px) {
    .image-cont {
      height: 500px;
      padding: 16px;
    }
  }
  @media only screen and (max-width: 400px) {
    .image-cont {
      height: 400px;
    }
  }
  @media only screen and (max-width: 300px) {
    .image-cont {
      height: 300px;
    }
  }
  @media only screen and (max-width: 250px) {
    .image-cont {
      height: 200px;
      padding: 8px;
    }
  }
  @media only screen and (max-width: 200px) {
    .image-cont {
      height: 200px;
    }
  }
  .relative {
    width: 100%;
    height: 100%;
  }
  .image-preview {
    width: 80px;
    height: 80px;
    position: relative;
    padding: 8px;
    background-color: ${(props) => props.colors.tan3};
    margin-right: 16px;
    cursor: pointer;
    transition: background-color 0.25s ease;
    border: 2px solid transparent;
    &:last-of-type {
      margin-right: 0;
    }
    &:hover {
      background-color: ${(props) => props.colors.tan2};
    }
    @media only screen and (max-width: 400px) {
      width: 60px;
      height: 60px;
      padding: 4px;
      margin-right: 8px;
    }
  }
  .image-active {
    background-color: ${(props) => props.colors.tan2};
    border: 2px solid ${(props) => props.colors.black};
  }
  .inner-preview-cont {
  }
  .images-holder {
    justify-content: flex-start;
  }
  .inner-image-cont {
    overflow: hidden;
  }
`;

const ImagePreview = ({
  images,
  activeIndex,
  setActiveIndex,
  curImage,
  setCurImage,
  setFullscreen,
}) => {
  const imageRef = useRef(null);

  const selectImage = (index) => {
    setActiveIndex(index);
    setCurImage(images[index]);

    const removeClass = () => {
      imageRef.current.classList.remove("opacity-to-left");
    };
    clearTimeout(removeClass, 1000);
    imageRef.current.classList.add("opacity-to-left");
    setTimeout(removeClass, 1000);
  };

  const imagePreviews = images.map((image, index) => {
    return (
      <div
        key={index}
        className={
          index == activeIndex ? "image-active image-preview" : "image-preview"
        }
        onClick={() => selectImage(index)}
      >
        <div className="relative inner-preview-cont">
          <Image
            src={image}
            alt={`Cup preview`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    );
  });
  useEffect(() => {
    setTimeout(() => {
      imageRef.current.classList.remove("opacity-to-left");
    }, 1000);
  }, []);
  return (
    <Cont colors={COLORS}>
      <div className="image-section">
        <div className="image-cont" onClick={() => setFullscreen(true)}>
          <div className="relative inner-image-cont">
            <Image
              src={curImage}
              fill
              quality={100}
              alt="Cup Preview"
              ref={imageRef}
              className="opacity-to-left"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="flex  images-holder">{imagePreviews}</div>
      </div>
    </Cont>
  );
};

export default ImagePreview;
