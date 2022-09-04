import React from "react";

import styled from "styled-components";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";

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
      <section></section>
    </StyledApp>
  );
}

export default App;
