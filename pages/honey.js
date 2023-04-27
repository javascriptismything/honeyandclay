import Image from "next/image";
import { useState, useEffect } from "react";
import styled from "styled-components";
import COLORS from "./data/colors";
import HoneySection from "@/components/home/HoneySection";

const Cont = styled.div`
  .section-holder {
    position: relative;
    align-items: stretch;
    height: 600px;
    & > div {
      flex: 1;
    }
  }
  .text-section {
    .text-block {
      margin: 32px 32px;
    }
    p {
      margin-bottom: 8px;
    }
    h1,
    h3 {
      margin-bottom: 16px;
    }
  }
  .image-holder {
    position: relative;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 1060px) {
    .section-holder {
      flex-direction: column;
      &:nth-of-type(2) {
        flex-direction: column-reverse;
      }
      height: 1200px;
    }

    .image-holder {
      width: 100%;
      height: 100%;
    }
  }
  @media only screen and (max-width: 500px) {
    .text-block {
      margin: 16px 16px !important;
    }
  }
`;

const Honey = () => {
  return (
    <Cont colors={COLORS}>
      <HoneySection />
      <div className="sm-spacer"></div>
      <div className="image-section">
        <div className="flex section-holder">
          <div className="image-holder">
            <Image
              src={"/images/honey/honey1.jpg"}
              alt="Bees"
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="text-section">
            <div className="text-block">
              <h1>Local, raw and completely unheated</h1>
              <p>
                Our honey is completey organic, and uses only organic practices
                and treatment methods for our bees.
              </p>
            </div>
            <div className="text-block">
              <h3>Completely unheated honey</h3>
              <p>
                Our honey is never heated at all! It is bottled fresh after
                extracting and bottled right away. No heat mats, no hot rooms.{" "}
              </p>
              <p>
                We try to sell all of immediately to preserve the flavor and
                before it crystallizes. Feel free to warm the honey in warm
                water if you prefer liquid honey (which I do).{" "}
              </p>
            </div>
            <div className="text-block">
              <h3>Local</h3>
              <p>
                Our honey comes straight from our own hives in the Ottawa area.
              </p>
              <p>
                Honey from your own area contains small amounts of allergens
                present in your local environment. Eating honey regularly can
                expose you to the allergen in small doses slowly over time. This
                can help build your immune system and reduce allergies.
              </p>
            </div>
          </div>
        </div>

        <div className="flex section-holder">
          <div className="text-section">
            <div className="text-block">
              <h1>Is raw honey really "raw"?</h1>
              <p>
                Many honeys that are labeled raw or unpasteurized may not
                actually be as “raw” as you think.
              </p>
              <p>
                By definition, unpasteurized honey is honey that has not been
                heated above 165° F, but at 40°C (104 F) invertase is destroyed,
                an important enzyme.
              </p>
              <p>
                Heating up to 50°C (122 F) for more than 48 hours turns the
                honey into caramel (the most valuable honey sugars become
                analogous to sugar). Heating honey higher than 140 degrees F for
                more than 2 hours will cause rapid degradation.
              </p>
              <p className="padding-16">
                Source:{" "}
                <span className="underline-hover blue">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://bee-health.extension.org/at-what-temperature-does-honey-have-to-be-heated-too-too-destroy-the-health-benefits-for-humans/#:~:text=Heating%20up%20to%2040%C2%B0,hours%20will%20cause%20rapid%20degradation.: "
                  >
                    https://bee-health.extension.org
                  </a>
                </span>
              </p>
            </div>

            <div className="text-block">
              <h3>What makes other honeys not "raw"?</h3>
              <p>
                Many honey producers heat their honey to ease the bottling
                process, but still consider that “unheated”. They may heat it up
                to 120° Fahrenheit.
              </p>
              <p>
                Additionally, it will be heated between 45°C (113 F) - 50° (122
                F) to turn the honey back into a liquid, which degrades the
                enzymes.
              </p>
            </div>
          </div>

          <div className="image-holder">
            <Image
              src={"/images/honey/honey2.jpg"}
              alt="Bees"
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="sm-spacer"></div>
    </Cont>
  );
};

export default Honey;
