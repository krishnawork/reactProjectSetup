import React from "react";
import { EatLoading } from "react-loadingg";

export function Loader() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          opacity: 0.6,
          backgroundColor: "#090920",
          zIndex: 10,
        }}
      ></div>

      <EatLoading speed={2} color="#fd7e14" size={"large"} />
    </>
  );
}
