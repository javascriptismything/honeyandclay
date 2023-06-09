import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import HoneySection from "@/components/home/HoneySection";
import PotterySection from "../components/PotterySection";
import FindUs from "../components/FindUs";
const Cont = styled.div`
  .hero-section {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px;
    & > div {
      height: 400px;
    }
    @media only screen and (max-width: 800px) {
      padding: 8px;
    }
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      .image-logo-holder {
        flex: auto;
      }
    }
  }
  .image-logo-holder {
    padding: 16px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Honey and Clay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cont>
        <div className="hero-section flex">
          <div className="flex-one">
            <h1 className="mar-bottom-32">Barbs Pottery & Honey Store</h1>
            <div className="flex justify-center flex-column align-center">
              <Link href="/pottery">
                <div className="blue-btn">
                  <h3>Shop Pottery</h3>
                </div>
              </Link>

              <div className="mar-bottom-32"></div>
              <Link href="/honey">
                <div className="orange-btn">
                  <h3>Shop Honey</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative image-logo-holder flex-one">
            <Image
              src="/images/art.PNG"
              fill
              priority
              quality={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="sm-spacer"></div>
        <HoneySection />
        <div className="sm-spacer"></div>
        <PotterySection />
        <div className="sm-spacer"></div>

        <FindUs />
        <div className="sm-spacer"></div>
        <div className="sm-spacer"></div>
        <div className="sm-spacer"></div>
        <div className="sm-spacer"></div>
      </Cont>
    </>
  );
}
