import React from "react";

import "./top.css";
import Hero from "./_components/Top-hero";
import Promise from "./_components/Top-promise";
import Service from "./_components/Top-service";
import Aboutus from "./_components/Top-aboutus";

export default function Home() {
  return (
    <>
      <Hero />
      <Promise />
      <Service />
      <Aboutus />
    </>
  );
}
