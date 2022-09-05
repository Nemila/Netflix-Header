import React from "react";

import styled from "styled-components";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Category from "./components/Category";

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
      <Category />
    </StyledApp>
  );
}

export default App;
