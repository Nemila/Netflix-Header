import React from "react";

import styled from "styled-components";

//components
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const StyledApp = styled.div`
  color: white;
  background-color: hsl(220, 16%, 5%);
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
