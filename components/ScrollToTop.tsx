"use client";
import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopButton: React.FC = () => {
  return (
    <ScrollToTop
      smooth
      component={<FaArrowUp />}
      style={{
        backgroundColor: "black",
        border: "2px solid white",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        right: "20px",
        bottom: "20px",
      }}
    />
  );
};

export default ScrollToTopButton;
