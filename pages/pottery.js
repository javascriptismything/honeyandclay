import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import COLORS from "./data/colors";
import PotteryPiece from "@/components/PotterySection/PotteryPiece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Cont = styled.div`
  width: 90%;
  margin: 0 auto;
  .pottery-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .filter {
    width: 200px;
    overflow: hidden;
  }
  .filter-header {
    border: 1px solid ${(props) => props.colors.black};
    padding: 4px 8px;
    cursor: pointer;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: ${(props) => props.colors.tan3};
    }
  }
  .filter-items {
    top: 0;
    border-bottom: 1px solid ${(props) => props.colors.black};
    border-right: 1px solid ${(props) => props.colors.black};
    border-left: 1px solid ${(props) => props.colors.black};
    transition: height 0.25s ease-out;
  }
  .filter-item {
    border-bottom: 1px solid ${(props) => props.colors.black};
    padding: 4px 16px;
    cursor: pointer;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: ${(props) => props.colors.tan3};
    }
  }
  .filter-active {
    background-color: ${(props) => props.colors.tan3};
  }
  .icon-ssm {
    transition: transform 0.25s ease-out;
  }
`;

const Filter = ({ sortAll, sortCups, sortPlates, sortBowls }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOptions] = useState([
    { text: "All", selected: true, function: sortAll },
    { text: "Plates", selected: false, function: sortPlates },
    {
      text: "Cups",
      selected: false,
      function: sortCups,
    },
    {
      text: "Bowls",
      selected: false,
      function: sortBowls,
    },
  ]);
  const [selectedOption, setSelectedOption] = useState("All");
  const selectOption = (text) => {
    setOptions((prev) => {
      return prev.map((option) => {
        // if text matches one selected by user
        if (option.text === text) {
          // set option selected
          option.text === text && setSelectedOption(option.text);
          option.function();
          return { ...option, selected: true };
        } else {
          // de select option
          return { ...option, selected: false };
        }
      });
    });
  };
  const accordion = useRef();
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState("0px");
  const toggleAccordion = () => {
    setHeight(visible ? "0px" : `${accordion.current.scrollHeight}px`);
    setVisible((prev) => {
      return !prev;
    });
  };
  const optionElems = options
    .filter((option) => option.text !== selectedOption)
    .map((option, index) => {
      return (
        <div
          key={index}
          onClick={() => selectOption(option.text)}
          className={
            option.selected ? "filter-item filter-active" : "filter-item"
          }
        >
          <h4>{option.text}</h4>
        </div>
      );
    });
  return (
    <div className="filter">
      <div
        className="filter-header flex align-center space-between"
        onClick={toggleAccordion}
      >
        <h4>{selectedOption}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ transform: visible ? "rotate(180deg)" : "" }}
          className="black icon-ssm"
        />
      </div>
      <div style={{ height: height }} ref={accordion} className="filter-items">
        {optionElems}
      </div>
    </div>
  );
};

const Pottery = () => {
  const sortAll = () => {};
  const sortBowls = () => {};
  const sortPlates = () => {};
  const sortCups = () => {};
  return (
    <Cont colors={COLORS}>
      <div className="black-line"></div>
      <div className="mar-bottom-16"></div>
      <Filter
        sortAll={sortAll}
        sortBowls={sortBowls}
        sortPlates={sortPlates}
        sortCups={sortCups}
      />
      <div className="pottery-holder">
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
        <PotteryPiece
          title="Mug With Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup1.png"}
        />
      </div>
    </Cont>
  );
};

export default Pottery;
