import React from "react";

import styled from "styled-components";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slider from "./components/Slider";

const StyledApp = styled.div`
  min-height: 100vh;

  color: white;
  background-color: black;
  /* background-color: hsl(220, 16%, 5%); */
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Header />
      {/* <section className="flex flex-col min-h-screen pl-[50px]">
        <header className="p-4">
          <h2 className="text-4xl font-bold capitalize">films du moments</h2>
        </header>
        <Slider title="Best new isekai" />
        <Slider title="Best new isekai" />
      </section> */}
    </StyledApp>
  );
}

export default App;
