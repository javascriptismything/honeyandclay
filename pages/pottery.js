import { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import COLORS from "../data/colors";
import PotteryPiece from "@/components/PotterySection/PotteryPiece";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const Cont = styled.div`
  width: 90%;
  margin: 0 auto;
  .pottery-piece {
    @media only screen and (max-width: 400px) {
      margin-right: 0;
    }
  }
  .image-main-holder {
    @media only screen and (max-width: 400px) {
      padding: 4px;
    }
  }
  .pottery-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .filter {
    width: 144px;
    margin-bottom: 16px;
    position: relative;
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
    position: absolute;
    z-index: 3;
    top: 100%;
    background-color: #fff;
    width: 100%;
  }
  .filter-item {
    border-bottom: 1px solid ${(props) => props.colors.black};
    padding: 4px 16px;
    cursor: pointer;
    transition: background-color 0.25s ease;
    left: 0;
    position: relative;
    &:last-of-type {
      border-bottom: none;
    }
    &:hover {
      background-color: ${(props) => props.colors.tan3};
    }
    h4 {
      animation: text-anim 0.25s ease;
      position: relative;
      left: 0px;
    }

    @keyframes text-anim {
      from {
        left: 50px;
      }
      to {
        left: 0px;
      }
    }
  }
  .filter-active {
    background-color: ${(props) => props.colors.tan3};
  }
  .icon-ssm {
    transition: transform 0.25s ease-out;
  }
`;

const Filter = ({ sortAll, sortPlates, sortCups, sortBowls }) => {
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

  const [visible, setVisible] = useState(false);
  const dropdown = useRef();
  function showDropdown() {
    setVisible((value) => !value);
  }

  const handleClickOutside = useCallback(
    (e) => {
      if (visible && e.target.closest(".filter") !== dropdown.current) {
        setVisible(false);
      }
    },
    [visible, setVisible, dropdown]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="filter" onClick={showDropdown} ref={dropdown}>
      <div className="filter-header flex align-center space-between">
        <h4>{selectedOption}</h4>
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ transform: visible ? "rotate(180deg)" : "" }}
          className="black icon-ssm"
        />
      </div>
      {visible && <div className="filter-items">{optionElems}</div>}
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
          title="Mug With Secret Handle"
          description="Light blue + light yellow"
          dimensions='4" x 12"'
          price="25"
          url={"/images/cup2.png"}
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
