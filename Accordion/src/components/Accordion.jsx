import { useState } from "react";

const Accordion = () => {
  const [togglebutton1, setTogglebutton1] = useState(false);
  const [togglebutton2, setTogglebutton2] = useState(false);
  const [togglebutton3, setTogglebutton3] = useState(false);

  const buttonhandler1 = () => {
    setTogglebutton1((prev) => !prev);
    setTogglebutton2(false);
    setTogglebutton3(false);
  };

  const buttonhandler2 = () => {
    setTogglebutton1(false);
    setTogglebutton2((prev) => !prev);
    setTogglebutton3(false);
  };
  const buttonhandler3 = () => {
    setTogglebutton1(false);
    setTogglebutton2(false);
    setTogglebutton3((prev) => !prev);
  };
  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div className="accordion-header-button">
          <div className="accordion-header">header-1</div>
          <button className="accordion-button" onClick={buttonhandler1}>
            button-1
          </button>
        </div>
        {togglebutton1 && <div className="accordion-content"> content-1</div>}
      </div>

      <div className="accordion-item">
        <div className="accordion-header-button">
          <div className="accordion-header">header-2</div>
          <button className="accordion-button" onClick={buttonhandler2}>
            button-2
          </button>
        </div>
        {togglebutton2 && <div className="accordion-content"> content-2</div>}
      </div>

      <div className="accordion-item">
        <div className="accordion-header-button">
          <div className="accordion-header">header-3</div>
          <button className="accordion-button " onClick={buttonhandler3}>
            button-3
          </button>
        </div>
        {togglebutton3 && <div className="accordion-content"> content-3</div>}
      </div>
    </div>
  );
};

export default Accordion;
