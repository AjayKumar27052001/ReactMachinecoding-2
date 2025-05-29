import { useState } from "react";
import Accordion from "./components/Accordion";
import ControlledAccordion from "./controlled Accordion/controlledAccordion";

function App() {
  return (
    <div>
      <h1>Normal Accordion</h1>
      <div>
        <Accordion />
      </div>
      <h1> Controlled Accordion</h1>
      <div>
        <ControlledAccordion />
      </div>
    </div>
  );
}

export default App;
