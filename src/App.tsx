import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/Footer";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Sidebar />
        <Dashboard />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
