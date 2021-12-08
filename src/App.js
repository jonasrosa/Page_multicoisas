import React, { useState } from "react";
import "./index.css";

import { Header } from "./components/header";
import { Navbar } from "./components/navbar";
import { Banner } from "./components/banner";
import { Department } from "./components/department";
import { Container } from "./components/container/Container.style";
import { GlobalStyle } from "./ui/Gloobal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Navbar />
        <Banner />
        <Department />
      </Container>
    </>
  );
}

export default App;
