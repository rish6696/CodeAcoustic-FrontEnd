import React from "react";
import Dynamic from "next/dynamic";
import BackGroundImage from "../../components/BackgroundImage";
import FLexLayout from "../../components/FlexLayout";
import Button from "../../components/Button/index";
import styles from "./HomeScreen.module.css";
import WhyUs from '../../components/WhyUsSection/index'
import AboutUs from '../../components/AboutUs/index'

const Navbar = Dynamic(() => import("../../components/Navbar/index"), {
  ssr: false,
});

export function _HomeScreen() {
  return (
    <>
      <BackGroundImage />
      <Navbar></Navbar>
      <FLexLayout alignItem="center" rowORColumn="column">
        <div className={styles.advertisementText}>
          Code it; <br />{" "}
          <span style={{ color: "#A16AE8" }}>
            {" "}
            Record it; <br />{" "}
          </span>{" "}
          Save it; <br />
        </div>
        <Button
          style={{
            width: "300px",
            fontSize: "30px",
            height: "50px",
            borderRadius: "30px",
          }}
          text="Get Started"
        />
      </FLexLayout>
      <WhyUs />
      <AboutUs/>
    </>
  );
}
