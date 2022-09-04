import React from "react";

import styled from "styled-components";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const StyledApp = styled.div`
  min-height: 100vh;
  color: white;
  background-color: black;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <Header />
    </StyledApp>
  );
}

export default App;
